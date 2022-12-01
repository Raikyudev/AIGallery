import { Navbar } from "../components/Navbar";
import { useState } from 'react';

const customers = [
  {customerID: "1", customerLastName: "Glados", customerFirstName: "Sebastian", phoneNumber: "123", email: "email@gmail.com", password: "password", role: "USER", username: "jason"},
  {customerID: "2", customerLastName: "Dogg", customerFirstName: "Snoop", phoneNumber: "420", email: "email@gmail.com", password: "password", role: "USER", username: "snoopdogg"},
  {customerID: "3", customerLastName: "Smart", customerFirstName: "Ben", phoneNumber: "748", email: "email@gmail.com", password: "password", role: "USER", username: "bsmart"},
  {customerID: "4", customerLastName: "Hart", customerFirstName: "Kevin", phoneNumber: "101", email: "email@gmail.com", password: "password", role: "USER", username: "khart"}
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

export default function admin()  {
  const [rows, setRows] = useState(customers)

    return (
        <div>
          <Navbar />

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
        <h1 className="text-3xl font-raleway,font-bold mt-5 text-center font-black">
        Products in Stock
        </h1>
        <hr></hr>
          </div>
  );
};
