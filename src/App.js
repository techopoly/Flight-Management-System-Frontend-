import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import FlightTable from "./components/FlightTable";
import BookingForm from "./components/BookingForm";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import BookModal from "./components/BookModal";
import EditModal from "./components/EditModal";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import axios from "axios";
import PassTable from "./components/PassTable";
import TableRowPass from "./components/TableRowPass";

const App = () => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [departDate, setDepartDate] = useState();
  const [arrivalDate, setArrivalDate] = useState();
  const [noOfTickets, setNoOfTickets] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [editModalShow, setEditModalShow] = useState(false);
  const [token, setToken] = useState("");
  const [search, setSearch] = useState(false)
  const [rowInfo, setRowInfo] = useState([])

  // for admin
  const [editModalFlightNo, setEditModalFlightNo] = useState(0);
  const [editModalfrom, setEditModalForm] = useState();
  const [editModalTo, setEditModalTo] = useState();
  const [editModalDeparture, setEditModalDeparture] = useState();
  const [editModalArrival, setEditModalArrival] = useState();
  const [editModalPrice, setEditModalPrice] = useState();
  const [editModalTotalSeats, setEditModalTotalSeats] = useState();
  const [editModalAvailableSeats, setEditModalAvailableSeats] = useState("");
  const [eachRow, setEachRow] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();

  //for signup
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //for login
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  useEffect(() => {
    const loginInfo = localStorage.getItem("isLoggedIn");
    if (loginInfo == "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const isLoggedInHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const isLoggedOutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  };

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

  const onEditModalAvailableSeats = (event) => {
    console.log("availableSeats: " + event.target.value);
    let availableSeats = event.target.value;
    setEditModalAvailableSeats((prevState) => {
      console.log(availableSeats);
      return availableSeats;
    });
  };

  const onEditModalPrice = (event) => {
    console.log("editModalPrice: " + event.target.value);
    let editModalPrice = event.target.value;
    setEditModalPrice((prevState) => {
      console.log(editModalPrice);
      return editModalPrice;
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

  const addFlight = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      "http://localhost:8050/addFlight",
      {
        destination: editModalTo,
        price: editModalPrice,
        seats: editModalAvailableSeats,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(res.data);
  };

  const editFlight = async (flight_no) => {
    const token = localStorage.getItem("token");
    console.log(editModalFlightNo,editModalTo, editModalPrice, editModalAvailableSeats);
    const res = await axios.post(
      "http://localhost:8050/updateFlight",
      {
        flight_no: editModalFlightNo,
        seats: editModalAvailableSeats,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(res.data);
  };

  const fetchPassDeatails = async (flight_no) => {
    console.log(editModalTo, editModalPrice, editModalAvailableSeats);
    const res = await axios.post(
      "http://localhost:8050/fetchPassDetailsUser",
      {
        flight_no: editModalFlightNo,
        seats: editModalAvailableSeats,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res.data);
  };

  const onSearch = (callback) => {
    callback()
  };




  return (
    <div>
      <h1>Flight Status</h1>
      <Header />
      <Route path="/signup">
        <Signup
          setUsername={setUsername}
          setEmail={setEmail}
          setPassword={setPassword}
          password={password}
          username={username}
          email={email}
        />
      </Route>
      <Route path="/login">
        <Login
          setEmail={setEmail}
          setPassword={setPassword}
          password={password}
          email={email}
          token={token}
          setToken={setToken}
          setIsLoggedIn={setIsLoggedIn}
        />
      </Route>
      <Route path="/home">
        <BookingForm
          onFromChangeHandler={onFromChangeHandler}
          onToChangeHandler={onToChangeHandler}
          onNoOfTicketChangeHandler={onNoOfTicketChangeHandler}
          from={from}
          to={to}
          departDate={departDate}
          arrivalDate={arrivalDate}
          noOfTickets={noOfTickets}
          isAdmin={isAdmin}
          onEditModalShowHandler={onEditModalShowHandler}
          setSearch = {setSearch}
          setRowInfo={setRowInfo}
          rowInfo ={rowInfo}
        />
        <FlightTable
          isAdmin={isAdmin}
          onBookHandler={() => setModalShow(true)}
          onEditModalShowHandler={onEditModalShowHandler}
          search = {search}
          to={to}
          onSearch = {onSearch}

        />
      </Route>
      <Route path="/fetchPassDetailsUser">
        <PassTable />
      </Route>
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
        addFlight={addFlight}
        editFlight={editFlight}
        editModalTo={editModalTo}
        editModalPrice={editModalPrice}
        editModalAvailableSeats={editModalAvailableSeats}
        onEditModalAvailableSeats={onEditModalAvailableSeats}
        onEditModalPrice={onEditModalPrice}
        onEditModalTo={setEditModalTo}
        editModalFlightNo={editModalFlightNo}
        setEditModalFlightNo={setEditModalFlightNo}
        onSearch = {onSearch}
      />
    </div>
  );
};

export default App;
