import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const TableRow = (props) => {
  return (
    <tr>
      <td>{props.from}</td>
      <td>{props.to}</td>
      <td>{props.flight_no}</td>
      <td>{props.no_of_tickets}</td>
      <td>{props.price}</td>
      <td>{props.total_seats}</td>
      <td>{props.available_seats}</td>
      <td>
        {" "}
        <Button
          variant="primary"
          size="sm"
          onClick={() => props.onBookHandler()}
        >
          {props.book}
        </Button>
      </td>
      <td>
        {props.isAdmin == true ? (
          <Button
            variant="primary"
            size="sm"
            onClick={() => props.onEditModalShowHandler(props.flight_no, props.rowInfo)}
          >
            Edit
          </Button>
        ) : null}
      </td>
    </tr>
  );
};

export default TableRow;
