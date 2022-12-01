import { Navbar } from "../components/Navbar";
import { useState } from 'react';

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

const Table = (props) => {
  const {data} = props
  return(<table>
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

export default function admin()  {
  const [rows, setRows] = useState(customers)
  const [rows2, setRows2] = useState(orders)
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
          </div>
  );
};
