import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { useState } from "react";

const TableRow = (props) => {

  return (
    <tr>
      <td>{props.from}</td>
      <td>{props.to}</td>
      <td>{props.flight_no}</td>
      <td>{props.no_of_tickets}</td>
      <td>{props.price}</td>
    </tr>
  );
};

export default TableRow;
