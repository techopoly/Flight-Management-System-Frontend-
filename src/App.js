import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FlightTable from "./components/FlightTable";
import BookingForm from "./components/BookingForm";
import {useState} from "react";
import Login from './components/Login';

const App = () => {
  
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [startDate, setStartDate] = useState();
  const [noOfTickets, setNoOfTickets] = useState(0);

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
  return (
    <div>
      <h1>Flight Status</h1>
      <Login/>
      <BookingForm
        onFromChangeHandler={onFromChangeHandler}
        onToChangeHandler={onToChangeHandler}
        onNoOfTicketChangeHandler={onNoOfTicketChangeHandler}
      />
      <FlightTable />
      
      
    </div>
  );
};

export default App;
