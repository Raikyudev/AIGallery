import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Item } from "../components/Item";
import { useState } from "react";
import { useCart } from "~/hooks/useCart";
import { ActionFunction, json } from "@remix-run/node";
import { useLoaderData, useActionData } from "@remix-run/react";
import { PrismaClient} from "@prisma/client";




export const action: ActionFunction = async({ request }: { request: Request }) =>{
  //setting form data
  //
  const formData = await request.formData();
  const size = String(formData.get("size"));
  const artName = String(formData.get("artName"));

  const prisma = new PrismaClient();

  //looking for orders assigned to current customer
  const orders = await prisma.orders.findMany({
    where: {
      customerID: 1,
    },
  });
  console.log(prisma.orders);
  console.log("boolean orders", orders.length == 0);
  console.log("orders", orders)

  //if there's no orders, make a new order
  if(orders.length == 0){
    const newOrder = await prisma.orders.create({
      data: {
        customerID: 1,
      }
    });
    
  }

  //find if there's already a basket order (hasCheckedOut should be false)
  let basketOrder = await prisma.orders.findMany({
    where: {
      customerID: 1,
      hasCheckedOut: false
    }
  })
    console.log("basket length boolean" , basketOrder.length == 0)

    //if there's no basket orders, create one
    if(basketOrder.length == 0){
      let newOrder = await prisma.orders.create({
        data: {
          customerID: 1,
        },
      });

    //pull basket order from the database
    basketOrder = await prisma.orders.findMany({
      where: {
        customerID: 1,
        hasCheckedOut: false
      }
    });
    }

    //find the currently added item
    const item = await prisma.products.findMany({
      where:{
        productName:artName,
        productSize: size
      }
    });

    let quantity = 0;

    //find if the item is already in the basket
    let orderItems: any = []
    orderItems = await prisma.orderItems.findMany({
      where:{
        productId: item[0].productID,
        orderID: basketOrder[0].orderID
      }
    })

    //if the item isn't in the basket, make a new orderItem and add it to the basket
    if(orderItems.length == 0){
      quantity = 1;
      orderItems = await prisma.orderItems.create({
        data:{
          productId: item[0].productID,
          quantity: quantity,
          price: item[0].productPrice,
          orderID: basketOrder[0].orderID
        }
      })
    //if the item is in the basket, find how many there are and increase the quantity by 1
    }else{
      quantity = orderItems[0].quantity
      const updateItem = await prisma.orderItems.update({
        where: {
          orderItemID: orderItems[0].orderItemID
        },
        data:{
          quantity: quantity+1
        }
      })
    }
    
   console.log("basket order end", basketOrder);
   console.log("orderItems end", orderItems)
    
  await prisma.$disconnect();
  return basketOrder;
}

export const loader = async ({ request }: { request: Request }) => {
  const prisma = new PrismaClient();
  const allUsers = await prisma.customers.findMany();
  const allOrders = await prisma.orderItems.findMany();
  const allProducts = await prisma.products.findMany();
  const allOrderItems = await prisma.orderItems.findMany();

  await prisma.$disconnect();

  return json({"users": allUsers, "orders":allOrders, "products":allProducts, "orderItems":allOrderItems});
}

export default function Main() {
  const data = useLoaderData();
  const products = data.products;
  const componentArray: React.ReactElement[] =[];
  for(let i:number = 0; i<products.length; i+=4 ){
      componentArray[i] = <Item key={i} image={products[i].productName + ".jpg"} priceS={products[i].productPrice} priceM={products[i+1].productPrice} priceL={products[i+2].productPrice} priceXl={products[i+3].productPrice} art_name={products[i].productName}  />
  
  };
  const actionData = useActionData();
  console.log("action", actionData);
  
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <Navbar />
      <main className="flex flex-col items-center mt-20 mx-28">
        <div className="grid gap-x-64  gap-y-32 grid-cols-1 grid-flow-row md:grid-cols-2 place-items-center ">
          {componentArray}
        </div>
        
      </main>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}
