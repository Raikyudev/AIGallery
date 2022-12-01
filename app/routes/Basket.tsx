import { Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import { PrismaClient } from "@prisma/client";
import { ActionFunction, json } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { BasketItem } from "~/components/BasketItem";

export const action: ActionFunction = async ({
  request,
}: {
  request: Request;
}) => {
  //setting form data
  //

  const formData = await request.formData();
  const submitType = formData.get("submitType");
  console.log("submit type", submitType);
  const product = formData.get("productID");
  const prisma = new PrismaClient();

  if (submitType === "delete") {
    if (product) {
      const productID: number = +product;
      console.log("product type", typeof productID);
      console.log("productID", productID);
      const deleteOrderItem = await prisma.orderItems.deleteMany({
        where: {
          productId: productID
        },
      });
      console.log(deleteOrderItem);
    } else {
      return false;
    }
  } else if (submitType === "removeAll") {
    const currentCustomerID = 1;
    let currentOrder = await prisma.orders.findMany({
      where: {
        customerID: currentCustomerID,
        hasCheckedOut: false,
      },
    });
    const deleteAllOrderItems = await prisma.orderItems.deleteMany({
      where: {
        orderID: currentOrder[0].orderID,
      },
    });
  } else if (submitType === "checkout") {
    const currentCustomerID = 1;
    let currentOrder = await prisma.orders.findMany({
      where: {
        customerID: currentCustomerID,
        hasCheckedOut: false,
      },
    });
    console.log("current order iD", currentOrder);
    const checkout = await prisma.orders.update({
      where: {
        orderID: currentOrder[0].orderID,
      },
      data: {
        hasCheckedOut: true,
      },
    });
  }
  return true;
};

export const loader = async ({ request }: { request: Request }) => {
  const prisma = new PrismaClient();
  const allUsers = await prisma.customers.findMany();
  const allOrders = await prisma.orders.findMany();
  const allProducts = await prisma.products.findMany();

  const currentOrderArray = await prisma.orders.findMany({
    where: {
      customerID: 1,
      hasCheckedOut: false,
    },
  });

  if (currentOrderArray.length == 0) {
    return false;
  }
  console.log("order array", currentOrderArray);

  const allOrderItems = await prisma.orderItems.findMany({
    where: {
      orderID: currentOrderArray[0].orderID,
    },
  });

  await prisma.$disconnect();

  return json({
    users: allUsers,
    orders: allOrders,
    products: allProducts,
    orderItems: allOrderItems,
    currentOrder: currentOrderArray[0],
  });
};

//use productID to find the product in orderItems

export default function Basket() {
  const data = useLoaderData();
  if (data === false) {
    return (
      <div>
        <Navbar />
        <div>
          <h1 className="text-center">
            Your basket is empty. Please add some items to your basket before
          </h1>
        </div>
      </div>
    );
  }
  const currentOrderID = data.currentOrder.orderID;
  const orderItems = data.orderItems;
  const orderArray: React.ReactElement[] = [];

  for (let i: number = 0; i < orderItems.length; i++) {
    let artName = "";
    let price = 0;
    let size = "";
    for (let j: number = 0; j < data.products.length; j++) {
      if (orderItems[i].productId == data.products[j].productID) {
        artName = data.products[j].productName;
        price = data.products[j].productPrice;
        size = data.products[j].productSize;
        break;
      }
    }
    orderArray[i] = (
      <BasketItem
        key={i}
        price={price}
        art_name={artName}
        size={size}
        productID={orderItems[i].productId}
        quantity={orderItems[i].quantity}
      />
    );
  }
  const actionData = useActionData();
  console.log("action", actionData);

  return (
    <div className="h-screen">
      <Navbar />
      <div className="text-3xl font-bold mt-5 mx-10 w-1/2 border-b border-solid border-1 border-black pb-5">
        <h1 className="">Your Basket</h1>
      </div>
      <div className="flex flex-row items-center  mt-20 ">
        <div className="flex flex-col items-left  mx-8">
          
            {orderArray}
            <Form method="post" action="/basket" name="basketItemForm">
            <input
              className="font-bold bg-black text-white px-10 w-60 h-10  md:h-10 ml-1 md:ml-2 rounded-lg mt-5 hover:cursor-pointer "
              type="submit"
              name="submitType"
              value="removeAll"
            />
            <input
              className="font-bold bg-black text-white px-10 w-60 h-10 md:h-10 ml-1 md:ml-2 rounded-lg mt-5 hover:cursor-pointer"
              type="submit"
              name="submitType"
              value="checkout"
            />
          </Form>
        </div>
      </div>
      <div className="mt-44">
        <Footer />
      </div>
    </div>
  );
}
