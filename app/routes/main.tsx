import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Item } from "../components/Item";
import { useState } from "react";
import { useCart } from "~/hooks/useCart";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getSession, commitSession } from "~/utils/items-session";
import { PrismaClient, Customers} from "@prisma/client";

export const loader = async ({ request }: { request: Request }) => {
  const prisma = new PrismaClient();
  const allUsers = await prisma.customers.findMany();
  const allOrders = await prisma.orderItems.findMany();
  const allProducts = await prisma.products.findMany();
  console.log("All customers",allUsers);
  await prisma.$disconnect();
  console.log(typeof(allUsers));
  return json({"users": allUsers, "orders":allOrders, "products":allProducts});
}

export default function Main() {
  const data = useLoaderData();
  const products = data.products;
  let sizeTracker = 1;
  const componentArray: React.ReactElement[] =[];
  for(let i:number = 0; i<products.length; i+=4 ){
    if(sizeTracker == 1){
      componentArray[i] = <Item key={i} image={products[i].productName + ".jpg"} priceS={products[i].productPrice} priceM={products[i+1].productPrice} priceL={products[i+2].productPrice} priceXl={products[i+3].productPrice} art_name={products.productName}  />
    }
  };
  console.log("array",componentArray)
  
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
