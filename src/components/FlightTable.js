import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import TableRow from "./TableRow";
import { useState } from "react";

const FlightTable = ()=> {
  const [rowInfo, setRowInfo] = useState([
    {
      from: "dhaka",
      to: "chittagong",
      flight_no: "123D",
      no_of_tickets: "4",
      departure_time: "9:00",
      price: 8000,
    },
    {
      from: "dhaka",
      to: "chittagong",
      flight_no: "123D",
      no_of_tickets: "4",
      departure_time: "9:00",
      price: 8000,
    },
    {
      from: "dhaka",
      to: "chittagong",
      flight_no: "123D",
      no_of_tickets: "4",
      departure_time: "9:00",
      price: 8000,
    },
    {
      from: "dhaka",
      to: "chittagong",
      flight_no: "123D",
      no_of_tickets: "4",
      departure_time: "9:00",
      price: 8000,
    }
  ]);

  const tableRowContent = rowInfo.map((eachRow, index) => {
  {console.log(eachRow.from)}
  return(
    <TableRow
      key={index}
      from={eachRow.from}
      to={eachRow.to}
      flight_no={eachRow.flight_no}
      no_of_tickets={eachRow.no_of_tickets}
      price={eachRow.price}
    />
  )
    
  });
  console.log(tableRowContent)

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Flight No</th>
          <th>No of Tickets</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
      {tableRowContent}
      </tbody>
    </Table>
  );
}

export default FlightTable;
