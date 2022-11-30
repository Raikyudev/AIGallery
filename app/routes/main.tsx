import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Item } from "../components/Item";
import { useState } from "react";
import { useCart } from "~/hooks/useCart";
import { ActionFunction, json } from "@remix-run/node";
import { useLoaderData, useActionData } from "@remix-run/react";
import { getSession, commitSession } from "~/utils/items-session";
import { PrismaClient} from "@prisma/client";




export const action: ActionFunction = async({ request }: { request: Request }) =>{
  const formData = await request.formData();
  console.log("Form data",formData)
  const prisma = new PrismaClient();
  const orders = await prisma.orders.findMany({
    where: {
      customerID: 2,
    },
  });
  console.log(prisma.orders);
  console.log("boolean orders", orders.length == 0);
  if(orders.length == 0){
    const newOrder = await prisma.orders.create({
      data: {
        customerID: 2,
      }
    });
    
  }else{
    let basketOrder = await prisma.orders.findMany({
      where: {
        customerID: 2,
        hasCheckedOut: false
      }
    })
    if(basketOrder.length == 0){
      let newOrder = await prisma.orders.create({
        data: {
          customerID: 2,
        },
      });
      basketOrder = await prisma.orders.findMany({
        where: {
          customerID: 2,
          hasCheckedOut: false
        }
      });
    }

    
  }
  return true;
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
      componentArray[i] = <Item key={i} image={products[i].productName + ".jpg"} priceS={products[i].productPrice} priceM={products[i+1].productPrice} priceL={products[i+2].productPrice} priceXl={products[i+3].productPrice} art_name={products.productName}  />
  
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
