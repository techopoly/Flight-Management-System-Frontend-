import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import FlightTable from "./components/FlightTable";
import BookingForm from "./components/BookingForm";
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import BookModal from "./components/BookModal";
import EditModal from "./components/EditModal";

const App = () => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [departDate, setDepartDate] = useState();
  const [arrivalDate, setArrivalDate] = useState();
  const [noOfTickets, setNoOfTickets] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [editModalShow, setEditModalShow] = useState(false);

  // for admin
  const [editModalfrom, setEditModalForm] = useState();
  const [editModalTo, setEditModalTo] = useState();
  const [editModalDeparture, setEditModalDeparture] = useState();
  const [editModalArrival, setEditModalArrival] = useState();
  const [editModalPrice, setEditModalPrice] = useState();
  const [editModalTotalSeats, setEditModalTotalSeats] = useState();
  const [editModalAvailableSeats, setEditModalAvailableSeats] = useState();
  const [eachRow, setEachRow] = useState();

  const onFromChangeHandler = (event) => {
    console.log("from: " + event.target.value);
    let from = event.target.value;
    setFrom((prevState) => {
      console.log(from);
      return from;
    });
  };

  const onToChangeHandler = (event) => {
    console.log("To: " + event.target.value);
    let to = event.target.value;
    setTo((prevState) => {
      console.log(from);
      return to;
    });
  };

  // const onDateChangeHandler = (event) => {
  //   console.log("from: " + event.target.value);
  //   let DateChangeHandler = event.target.value;
  //   setDateChangeHandler((prevState) => {
  //     console.log(from);
  //     return DateChangeHandler;
  //   });
  // }

  const onNoOfTicketChangeHandler = (event) => {
    console.log("NoOfTicketChangeHandler: " + event.target.value);
    let NoOfTicketChangeHandler = event.target.value;
    setNoOfTickets((prevState) => {
      console.log(NoOfTicketChangeHandler);
      return NoOfTicketChangeHandler;
    });
  };

  const onEditModalShowHandler = (flight_no, rowInfo) => {
    setEditModalShow(true);
    const selectedRow = rowInfo.filter((eachRow) => {
      if (eachRow.flight_no == flight_no) {
        console.log(flight_no);
        setEachRow((prevState) => {
          return eachRow;
        });
      }
    });
  };

  return (
    <div>
      <h1>Flight Status</h1>
      <Signup />
      <Login />
      <BookingForm
        onFromChangeHandler={onFromChangeHandler}
        onToChangeHandler={onToChangeHandler}
        onNoOfTicketChangeHandler={onNoOfTicketChangeHandler}
        from={from}
        to={to}
        departDate={departDate}
        arrivalDate={arrivalDate}
        noOfTickets={noOfTickets}
      />
      <FlightTable
        isAdmin={isAdmin}
        onBookHandler={() => setModalShow(true)}
        onEditModalShowHandler={onEditModalShowHandler}
      />
      <BookModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onNoOfTicketChangeHandler={onNoOfTicketChangeHandler}
        from={from}
        to={to}
        departDate={departDate}
        arrivalDate={arrivalDate}
        noOfTickets={noOfTickets}
      />
      <EditModal
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        eachRow={eachRow}
      />
    </div>
  );
};

export default App;
