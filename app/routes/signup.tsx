import { EntryContext, LinksFunction, LoaderFunction, redirect} from "@remix-run/node";
import { flushSync } from "react-dom";
import stylesUrl from "../styles/root.css"
import {Form, useLoaderData, useTransition} from "@remix-run/react"
import { Navbar } from "../components/Navbar";
import { PrismaClient, Customers } from "@prisma/client";



export async function loader({ request }) {
  const prisma = new PrismaClient();
  const allUsers = await prisma.customers.findMany();
  console.log("allUser", allUsers);
  await prisma.$disconnect();
  return allUsers;
}

export async function action({request}){
  const formData = await request.formData()
    const prisma = new PrismaClient();
    const allUsers = await prisma.customers.create({
    data: {customerFirstName: formData.get("customerFirstName"),
    customerLastName: formData.get("customerLastName"), 
    username: formData.get("username"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    password:formData.get("password")}
  });
  await prisma.$disconnect();
  return true;

}

export default function IndexRoutes(){
  const projects = useLoaderData();
  const { state } = useTransition();
  const busy = state === "submitting";
  return (
  <div>
    <Navbar />
    <div id  = "userforms">
      <div id ="customer">
       <div id = "signup">
        
        <Form method= "post" id= "signup">
        <h2>Customer Signup</h2>
          <input type ="text" name="customerFirstName" placeholder="First Name"/><br/>
          <input type ="text" name="customerLastName" placeholder="Last Name"/><br/>
          <input type ="text" name="username" placeholder="Username"/><br/>
          <input type ="text" name="email" placeholder="Email"/><br/>
          <input type ="text" name="phoneNumber" placeholder="Phone Number"/><br/>
          <input id="password" type ="password" name="password" placeholder="Password"/><br/>
          <input id="confirm" type ="password" name="confirm" placeholder="Confirm Password"/><br/>
          <button type="submit" disabled={busy}>
          {busy ? "Submitting..." : "Submit"}
        </button>
        </Form> 
 
        <br/>
        </div>
        <div id = "login">
        <form method ="POST" id= "login">
        <h2>Already have an account</h2>
          <input type ="text" name="names" placeholder="First Name"/><br/>
          <input type ="password" name="password2" placeholder="Password"/><br/>
          <button type = "submit" >Submit</button>
        </form> 
        </div>
        </div>
    </div>

      </div>
  )
}