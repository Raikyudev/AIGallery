import { Navbar } from "~/components/Navbar";
import bg from "~/assets/mountain_guardian.jpg";
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
        <div className="flex flex-col items-left  mx-8">
          <Form method="post" action="/checkout" name="basketItemForm">
            {orderArray}

            <input
              className="font-bold bg-white text-black px-10 w-60 h-10  md:h-10 ml-1 md:ml-2 rounded-lg mt-5 "
              type="submit"
              name="submitType"
              value="removeAll"
            />
            <input
              className="font-bold bg-white text-black px-10 w-60 h-10 md:h-10 ml-1 md:ml-2 rounded-lg mt-5"
              type="submit"
              name="submitType"
              value="checkout"
            />
          </Form>
        </div>
        <div className="flex flex-col items-left  mx-8"></div>
      </div>
      <div className="mt-20 mx-10 border-b  border-solid border-white border-1 w-1/2"></div>
      <div className="mt-44">
        <Footer />
      </div>
    </div>
  );
}
