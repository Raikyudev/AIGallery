import { Navbar } from "../components/Navbar";
import { useState } from 'react';

import { PrismaClient } from "@prisma/client";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

const customers = [
  {customerID: "1", customerLastName: "Glados", customerFirstName: "Sebastian", phoneNumber: "123", email: "email@gmail.com", password: "password", role: "USER", username: "jason"},
  {customerID: "2", customerLastName: "Dogg", customerFirstName: "Snoop", phoneNumber: "420", email: "email@gmail.com", password: "password", role: "USER", username: "snoopdogg"},
  {customerID: "3", customerLastName: "Smart", customerFirstName: "Ben", phoneNumber: "748", email: "email@gmail.com", password: "password", role: "USER", username: "bsmart"},
  {customerID: "4", customerLastName: "Hart", customerFirstName: "Kevin", phoneNumber: "101", email: "email@gmail.com", password: "password", role: "USER", username: "khart"}
]

const orders = [
  {orderID: "1", customerID: "1", orderDate: "2021-01-01T02:07:14.000Z", paymentDate: "2021-01-01T02:07:14.000Z", hasCheckedOut: "true"},
  {orderID: "2", customerID: "1", orderDate: "2021-01-01T02:07:14.000Z", paymentDate: "2021-01-01T02:07:14.000Z", hasCheckedOut: "false"}
]

const products = [
  {productID: "1", productName:"AI Robot", productPrice:"34.99", productSize:"S"},
  {productID: "2", productName:"AI Robot", productPrice:"44.99", productSize:"M"},
  {productID: "3", productName:"AI Robot", productPrice:"54.99", productSize:"L"},
  {productID: "4", productName:"AI Robot", productPrice:"64.99", productSize:"XL"},
  {productID: "5", productName:"Angel Of Death", productPrice:"24.99", productSize:"S"},
  {productID: "6", productName:"Angel Of Death", productPrice:"39.99", productSize:"M"},
  {productID: "7", productName:"Angel Of Death", productPrice:"54.99", productSize:"L"},
  {productID: "8", productName:"Angel Of Death", productPrice:"79.99", productSize:"XL"},
  {productID: "9", productName:"Burning Harbour", productPrice:"27.99", productSize:"S"},
  {productID: "10", productName:"Burning Harbour", productPrice:"37.99", productSize:"M"},
  {productID: "11", productName:"Burning Harbour", productPrice:"47.99", productSize:"L"},
  {productID: "12", productName:"Burning Harbour", productPrice:"57.99", productSize:"XL"},
  {productID: "13", productName:"Faster Than The Speed Of Light", productPrice:"74.99", productSize:"S"},
  {productID: "14", productName:"Faster Than The Speed Of Light", productPrice:"84.99", productSize:"M"},
  {productID: "15", productName:"Faster Than The Speed Of Light", productPrice:"94.99", productSize:"L"},
  {productID: "16", productName:"Faster Than The Speed Of Light", productPrice:"104.99", productSize:"XL"},
  {productID: "17", productName:"Ghost Town", productPrice:"15.00", productSize:"S"},
  {productID: "18", productName:"Ghost Town", productPrice:"20.00", productSize:"M"},
  {productID: "19", productName:"Ghost Town", productPrice:"25.00", productSize:"L"},
  {productID: "20", productName:"Ghost Town", productPrice:"30.00", productSize:"XL"},
  {productID: "21", productName:"Hole", productPrice:"29.99", productSize:"S"},
  {productID: "22", productName:"Hole", productPrice:"39.99", productSize:"M"},
  {productID: "23", productName:"Hole", productPrice:"49.99", productSize:"L"},
  {productID: "24", productName:"Hole", productPrice:"59.99", productSize:"XL"},
  {productID: "25", productName:"Mountain Guardian", productPrice:"80.00", productSize:"S"},
  {productID: "26", productName:"Mountain Guardian", productPrice:"95.00", productSize:"M"},
  {productID: "27", productName:"Mountain Guardian", productPrice:"110.00", productSize:"L"},
  {productID: "28", productName:"Mountain Guardian", productPrice:"125.00", productSize:"XL"},
  {productID: "29", productName:"Old Town Road", productPrice:"44.95", productSize:"S"},
  {productID: "30", productName:"Old Town Road", productPrice:"54.95", productSize:"M"},
  {productID: "31", productName:"Old Town Road", productPrice:"64.95", productSize:"L"},
  {productID: "32", productName:"Old Town Road", productPrice:"74.95", productSize:"XL"},
  {productID: "33", productName:"Silent Nature", productPrice:"100.00", productSize:"S"},
  {productID: "34", productName:"Silent Nature", productPrice:"110.00", productSize:"M"},
  {productID: "35", productName:"Silent Nature", productPrice:"120.00", productSize:"L"},
  {productID: "36", productName:"Silent Nature", productPrice:"130.00", productSize:"XL"},
  {productID: "37", productName:"Space Dogs", productPrice:"100.00", productSize:"S"},
  {productID: "38", productName:"Space Dogs", productPrice:"110.00", productSize:"M"},
  {productID: "39", productName:"Space Dogs", productPrice:"120.00", productSize:"L"},
  {productID: "40", productName:"Space Dogs", productPrice:"130.00", productSize:"XL"},
  {productID: "41", productName:"The Chosen One", productPrice:"149.99", productSize:"S"},
  {productID: "42", productName:"The Chosen One", productPrice:"159.99", productSize:"M"},
  {productID: "43", productName:"The Chosen One", productPrice:"169.99", productSize:"L"},
  {productID: "44", productName:"The Chosen One", productPrice:"179.99", productSize:"XL"}, 
  {productID: "45", productName:"The Heavens", productPrice:"29.99", productSize:"S"},
  {productID: "46", productName:"The Heavens", productPrice:"39.99", productSize:"M"},
  {productID: "47", productName:"The Heavens", productPrice:"49.99", productSize:"L"},
  {productID: "48", productName:"The Heavens", productPrice:"59.99", productSize:"XL"},
  {productID: "49", productName:"The Lighthouse", productPrice:"15.00", productSize:"S"},
  {productID: "50", productName:"The Lighthouse", productPrice:"20.00", productSize:"M"},
  {productID: "51", productName:"The Lighthouse", productPrice:"25.00", productSize:"L"},
  {productID: "52", productName:"The Lighthouse", productPrice:"30.00", productSize:"XL"},
  {productID: "53", productName:"80s London", productPrice:"15.00", productSize:"S"},
  {productID: "54", productName:"80s London", productPrice:"20.00", productSize:"M"},
  {productID: "55", productName:"80s London", productPrice:"25.00", productSize:"L"},
  {productID: "56", productName:"80s London", productPrice:"30.00", productSize:"XL"},
]
export const loader = async ({ request }: { request: Request }) => {

  const prisma = new PrismaClient();
  const allUsers = await prisma.customers.findMany();
  const allOrders = await prisma.orderItems.findMany();
  const allProducts = await prisma.products.findMany();
  const allOrderItems = await prisma.orderItems.findMany();

  await prisma.$disconnect();

  return json({
    "users": allUsers,
    "orders": allOrders,
    "products": allProducts,
    "orderItems": allOrderItems,
  });
};

const Row = (props) => {
  const {customerID, customerLastName, customerFirstName, phoneNumber, email, password, role, username} = props
  return (<tr>
    <td>{customerID}</td>
    <td>{customerLastName}</td>
    <td>{customerFirstName}</td>
    <td>{phoneNumber}</td>
    <td>{email}</td>
    <td>{password}</td>
    <td>{role}</td>
    <td>{username}</td>
  </tr>)
}

const Row2 = (props2) => {
  const {orderID, customerID, orderDate, paymentDate, hasCheckedOut} = props2
  return (<tr>
    <td>{orderID}</td>
    <td>{customerID}</td>
    <td>{orderDate}</td>
    <td>{paymentDate}</td>
    <td>{hasCheckedOut}</td>
  </tr>)
}

const Row3 = (props3) => {
  const {productID, productName, productPrice, productSize} = props3
  return (<tr>
    <td>{productID}</td>
    <td>{productName}</td>
    <td>{productPrice}</td>
    <td>{productSize}</td>
  </tr>)
}

const Header = ({ array }) => {
  let counter = 0;
  const headers = Object.keys(array[0] ?? {});
  return headers.map((x) => {
    ++counter;
    return (
      <th key={counter}>
        {x}
      </th>
    );
  });
};

const Table = (props) => {
  const {data} = props
  return(<table>
    <tr>
      <Header array={customers} />
      </tr>
    <tbody>
      {data.map(row =>
        <Row customerID = {row.customerID}
        customerLastName = {row.customerLastName}
        customerFirstName = {row.customerFirstName}
        phoneNumber = {row.phoneNumber}
        email = {row.email}
        password = {row.email}
        role = {row.role}
        username = {row.username}/>)}
    </tbody>
  </table>)
}

const Table2 = (props2) => {
  const {data} = props2
  return(<table>
    <tr>
      <Header array={orders} />
      </tr>
    <tbody>
      {data.map(rows2 =>
        <Row2 orderID = {rows2.orderID}
        customerID = {rows2.customerID}
        orderDate = {rows2.orderDate}
        paymentDate = {rows2.paymentDate}
        hasCheckedOut = {rows2.hasCheckedOut}/>)}
    </tbody>
  </table>)
}

const Table3 = (props3) => {
  const {data} = props3
  return(<table>
    <tr>
      <Header array={products} />
      </tr>
    <tbody>
      {data.map(rows3 =>
        <Row3 productID = {rows3.productID}
        productName = {rows3.productName}
        productPrice = {rows3.productPrice}
        productSize = {rows3.productSize}/>)}
    </tbody>
  </table>)
}

export default function admin()  {
  const [rows, setRows] = useState(customers)
  const [rows2, setRows2] = useState(orders)
  const [rows3, setRows3] = useState(products)
  const data = useLoaderData();
    return (
        <div>
          <Navbar />

        <h1 className="text-3xl font-raleway,font-bold mt-5 text-center font-black">Admin Page</h1>
        <br></br>

        <h1 className="text-3xl font-raleway,font-bold mt-5 text-center font-black">
        Customers
        </h1>
        <hr></hr>

        <div className="flex flex-row items-center justify-center">
        <Table data = {rows}/>
        </div>

        <h1 className="text-3xl font-raleway,font-bold mt-5 text-center font-black">
        Orders
        </h1>
        <hr></hr>

        <div className="flex flex-row items-center justify-center">
        <Table2 data = {rows2}/>
        </div>

        <h1 className="text-3xl font-raleway,font-bold mt-5 text-center font-black">
        Products in Stock
        </h1>
        <hr></hr>

        <div className="flex flex-row items-center justify-center">
        <Table3 data = {rows3}/>
        </div>
          </div>
  );
};
