import { Navbar } from "../components/Navbar";
import { useState } from 'react'

const customers = [
  {name: "Ayush", username: " ayush1243"},
  {name: "avjit", username: " avjit748"},
  {name: "ahdil", username: " ahdil747"}
]

const Row = (props) => {
  const {name, username} = props
  return (<tr>
    <td>{name}</td>
    <td>{username}</td>
  </tr>)
}

const Table = (props) => {
  const {data} = props
  return(<table>
    <tbody>
      {data.map(row =>
        <Row name = {row.name}
        username = {row.username}/>)}
    </tbody>
  </table>)
}

const admin = () => {

  const [rows, setRows] = useState(customers)
    return (
        <div>
          <Navbar />
          <h1 className="text-3xl font-raleway,font-bold mt-5 text-center font-black">
        Customers
        </h1>
        <hr></hr>
        <Table data = {rows}/>

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

export default admin;