import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import TableRowPass from "./TableRowPass";
import { useState, useEffect } from "react";
import axios from "axios";

const FlightTable = (props) => {
  const [pass_id, setPass_id] = useState();
  const [rowInfo, setRowInfo] = useState([]);

  useEffect(async (pass_id) => {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      "http://localhost:8050/fetchPassDetails",
      {
        pass_id: 512349,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(res.data);
    setRowInfo(res.data.data);
  }, []);

  const cancelHandler = async (flight_no, pass_id) => {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      "http://localhost:8050/cancelBookedFlight",
      {
        flight_no: flight_no,
        pass_id: pass_id
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
  };

  const tableRowContent = rowInfo.map((eachRow, index) => {
    return (
      <TableRowPass
        key={index}
        pass_id={eachRow.pass_id}
        flight_no={eachRow.flight_no}
        date={eachRow.date}
        // email={eachRow.email}
        bookedseats={eachRow.seats_booked}
        pass_id = {eachRow.pass_id}
        isAdmin={props.isAdmin}
        cancelHandler = {cancelHandler}
      />
    );
  });
  console.log(tableRowContent);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Pass_id</th>
          <th>Flight No</th>
          <th>Seats Booked</th>
          <th>Cancel</th>
          {/* {props.isAdmin == true ? <th>Cancel</th> : null} */}
        </tr>
      </thead>
      <tbody>{tableRowContent}</tbody>
    </Table>
  );
};

export default FlightTable;
