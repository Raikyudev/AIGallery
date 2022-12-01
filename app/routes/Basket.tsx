import { Navbar } from "~/components/Navbar";
import bg from "~/assets/mountain_guardian.jpg";
import { Footer } from "~/components/Footer";
import { PrismaClient } from "@prisma/client";
import { ActionFunction, json } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { BasketItem } from "~/components/BasketItem";

export const action: ActionFunction = async ({
  request,
}: {
  request: Request;
}) => {
  //setting form data
  //
  const formData = await request.formData();
  const size = String(formData.get("size"));
  const artName = String(formData.get("artName"));

  const prisma = new PrismaClient();

  //looking for orders assigned to current customer
  const orders = await prisma.orderItems.findMany({
    where: {
      orderID: 1,
    },
  });
  console.log(prisma.orderItems);
  console.log("boolean orders", orders.length == 0);
  console.log("orders", orders);

  //if there's no orders, make a new order
  if (orders.length == 0) {
    const newOrder = await prisma.orders.create({
      data: {
        customerID: 1,
      },
    });
  }

  //find if there's already a basket order (hasCheckedOut should be false)
  let basketOrder = await prisma.orders.findMany({
    where: {
      customerID: 1,
      hasCheckedOut: false,
    },
  });
  console.log("basket length boolean", basketOrder.length == 0);

  //if there's no basket orders, create one
  if (basketOrder.length == 0) {
    let newOrder = await prisma.orders.create({
      data: {
        customerID: 1,
      },
    });

    //pull basket order from the database
    basketOrder = await prisma.orders.findMany({
      where: {
        customerID: 1,
        hasCheckedOut: false,
      },
    });
  }

  //find the currently added item
  const item = await prisma.products.findMany({
    where: {
      productName: artName,
      productSize: size,
    },
  });

  let quantity = 0;

  //find if the item is already in the basket
  let orderItems: any = [];
  orderItems = await prisma.orderItems.findMany({
    where: {
      productId: item[0].productID,
      orderID: basketOrder[0].orderID,
    },
  });

  //if the item isn't in the basket, make a new orderItem and add it to the basket
  if (orderItems.length == 0) {
    quantity = 1;
    orderItems = await prisma.orderItems.create({
      data: {
        productId: item[0].productID,
        quantity: quantity,
        price: item[0].productPrice,
        orderID: basketOrder[0].orderID,
      },
    });
    //if the item is in the basket, find how many there are and increase the quantity by 1
  } else {
    quantity = orderItems[0].quantity;
    const updateItem = await prisma.orderItems.update({
      where: {
        orderItemID: orderItems[0].orderItemID,
      },
      data: {
        quantity: quantity + 1,
      },
    });
  }

  console.log("basket order end", basketOrder);
  console.log("orderItems end", orderItems);

  await prisma.$disconnect();
  return basketOrder;
};

export const loader = async ({ request }: { request: Request }) => {
  const prisma = new PrismaClient();
  const allUsers = await prisma.customers.findMany();
  const allOrders = await prisma.orderItems.findMany();
  const allProducts = await prisma.products.findMany();
  const allOrderItems = await prisma.orderItems.findMany();
  console.log(allOrderItems);

  await prisma.$disconnect();

  return json({
    users: allUsers,
    orders: allOrders,
    products: allProducts,
    orderItems: allOrderItems,
  });
};

//use productID to find the product in orderItems

export default function Basket() {
  const data = useLoaderData();
  console.log(data);
  const orderItems = data.orderItems;
  const orderArray: React.ReactElement[] = [];

  for (let i: number = 0; i < orderItems.length; i++) {
    let artName = "";
    let price = 0;
    let size = "";
    for (let j: number = 0; j < data.products.length; j++) {
      if (orderItems[i].productId == data.products[j].productID) {
        console.log("product name", data.products[j].productName);
        artName = data.products[j].productName;
        price = data.products[j].productPrice;
        size = data.products[j].productSize;
        break;
      }
    }
    console.log("art name", artName);
    orderArray[i] = (
      <BasketItem key={i} price={price} art_name={artName} size={size} />
    );
  }
  const actionData = useActionData();
  console.log("action", actionData);

  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <Navbar />
      <div className="text-3xl font-bold mt-5 mx-10 w-1/2 border-b border-solid border-1 border-white pb-5">
        <h1 className="text-white">Your Basket</h1>
      </div>
      <div className="flex flex-row items-center  mt-20 ">
        <div className="flex flex-col items-left  mx-8">{orderArray}</div>
        <div className="flex flex-col items-left  mx-8"></div>
      </div>
      <div className="mt-20 mx-10 border-b  border-solid border-white border-1 w-1/2"></div>
      <div className="mt-44">
        <Footer />
      </div>
    </div>
  );
}
