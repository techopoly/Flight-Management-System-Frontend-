import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const TableRowPass = (props) => {
  return (
    <tr>
      <td>{props.pass_id}</td>
      <td>{props.flight_no}</td>
      <td>{props.bookedseats}</td>
 
      <td>
        {" "}
        <Button
          variant="primary"
          size="sm"
          onClick={() => props.cancelHandler(props.flight_no, props.pass_id)}
        >
          Cancel
        </Button>
      </td>
      {/* <td>
        {props.isAdmin == true ? (
          <Button
            variant="primary"
            size="sm"
            onClick={() => props.onEditModalShowHandler(props.flight_no, props.rowInfo)}
          >
            Cancel
          </Button>
        ) : null}
      </td> */}
    </tr>
  );
};

export default TableRowPass;
