import { EntryContext, LinksFunction, LoaderFunction, redirect} from "@remix-run/node";
import { flushSync } from "react-dom";
import stylesUrl from "../styles/root.css"
import {Form} from "@remix-run/react"
import { db } from "../utils/db.server"
import {  z } from "zod"
import { Navbar } from "../components/Navbar";


export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl,
    }
  ];
};

export const userSchema = z.object({
  customerFirstName: z.string().min(1),
  customerLastName: z.string().min(1),
  email: z.string().min(1),
  phoneNumber: z.string().min(1),
  password: z.string().min(1)

})

export async function action({request}){
  const formData = await request.formData()
  const body = Object.fromEntries(formData.entries())

  const { error, success, data } = userSchema.safeParse(body)
  console.log(error, success , data)

  
 db.customers.create({
    data: data
  })

  return null

}

export default function IndexRoutes(){
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
          <input type ="text" name="email" placeholder="Email"/><br/>
          <input type ="text" name="phoneNumber" placeholder="Phone Number"/><br/>
          <input id="password" type ="password" name="password" placeholder="Password"/><br/>
          <input id="confirm" type ="password" name="confirm" placeholder="Confirm Password"/><br/>
          <input id="submit" type ="submit"  placeholder="Submit1"/>
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

        <div id = "admin">
        <div id = "admn_signup">
        <form id= "signup">
        <h2>Admin login</h2>
          <input type ="text" name="name" placeholder="First Name"/><br/>
          <input type ="password" name="password" placeholder="Password"/><br/>
          <input type ="password" name="confirm" placeholder="Confirm Password"/><br/>
          <a id="link" href="#">Already have an account login</a>
        </form> 
        </div>
        </div>
    </div>

      </div>
  )

}
