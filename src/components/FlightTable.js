import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import TableRow from "./TableRow";
import { useState } from "react";

const FlightTable = (props) => {
  const [rowInfo, setRowInfo] = useState([
    {
      from: "Dhaka",
      to: "Chittagong",
      flight_no: "1D",
      no_of_tickets: "4",
      departure_time: "9:00",
      price: 8000,
      total_seats: 200,
      available_seats: 80,
      book: "Book",
    },
    {
      from: "Dhaka",
      to: "Chittagong",
      flight_no: "2D",
      no_of_tickets: "4",
      departure_time: "9:00",
      price: 8000,
      total_seats: 200,
      available_seats: 80,
      book: "Book",
    },
    {
      from: "Dhaka",
      to: "Chittagong",
      flight_no: "3D",
      no_of_tickets: "4",
      departure_time: "9:00",
      price: 8000,
      total_seats: 200,
      available_seats: 80,
      book: "Book",
    },
    {
      from: "Dhaka",
      to: "Chittagong",
      flight_no: "4D",
      no_of_tickets: "4",
      departure_time: "9:00",
      price: 8000,
      total_seats: 200,
      available_seats: 80,
      book: "Book",
    },
  ]);

  const tableRowContent = rowInfo.map((eachRow, index) => {
    return (
      <TableRow
        rowInfo = {rowInfo}
        key={index}
        from={eachRow.from}
        to={eachRow.to}
        flight_no={eachRow.flight_no}
        no_of_tickets={eachRow.no_of_tickets}
        price={eachRow.price}
        total_seats={eachRow.total_seats}
        available_seats={eachRow.available_seats}
        book={eachRow.book}
        onBookHandler={props.onBookHandler}
        onEditModalShowHandler={props.onEditModalShowHandler}
        isAdmin={props.isAdmin}
      />
    );
  });
  console.log(tableRowContent);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Flight No</th>
          <th>No of Tickets</th>
          <th>Price</th>
          <th>Total Seats</th>
          <th>Available Seats</th>
          <th>Book seat</th>
          {props.isAdmin == true ? <th>Edit</th> : null}
        </tr>
      </thead>
      <tbody>{tableRowContent}</tbody>
    </Table>
  );
};

export default FlightTable;
