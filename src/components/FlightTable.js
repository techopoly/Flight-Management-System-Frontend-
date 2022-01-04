import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import TableRow from "./TableRow";
import { useState, useEffect } from "react";
import axios from "axios";

const FlightTable = (props) => {


  useEffect(async () => {
    const res = await axios.post(
      "http://localhost:8050/allFlight",
      {
        email: props.email,
        password: props.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res.data);
    setRowInfo(res.data.data);
  }, []);

  // useEffect(async () => {
  //   const res = await axios.post(
  //     "http://localhost:8050/searchFlight",
  //     {
  //       destination: props.to
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   console.log(res.data);
  //   setRowInfo(res.data.data);
  // }, [props.search]);

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
          rowInfo={rowInfo}
          key={index}
          from={eachRow.from}
          to={eachRow.destination}
          flight_no={eachRow.flight_no}
          no_of_tickets={eachRow.seats}
          price={eachRow.price}
          total_seats={eachRow.total_seats}
          available_seats={eachRow.seats}
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
          <th>To</th>
          <th>Flight No</th>
          <th>No of Tickets</th>
          <th>Price</th>
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
