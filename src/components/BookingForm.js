import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import classes from "./BookingForm.module.css";

const BookingForm = (props) => {
  return (
    <>
      <div className={`${classes.wrapper} ${classes["bg-white"]}`}>
        <form action="#">
          <div class="form-group border-bottom d-flex align-items-center justify-content-between flex-wrap">
            {" "}
            <label class="option my-sm-0 my-2">
              {" "}
              <input type="radio" name="radio" checked />
              Round Trip <span class="checkmark"></span>{" "}
            </label>{" "}
            <label class="option my-sm-0 my-2">
              {" "}
              <input type="radio" name="radio" />
              One Way <span class="checkmark"></span>{" "}
            </label>
            <div class="d-flex align-items-center my-sm-0 my-2">
              {" "}
              <a href="#" class="text-decoration-none">
                {" "}
                Multi-city/Stopovers{" "}
                <span class="fas fa-angle-right ps-2 text-primary"></span>{" "}
              </a>{" "}
            </div>
          </div>
          <div class="form-group d-sm-flex margin">
            <div class="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative">
              {" "}
              <input
                type="text"
                required
                placeholder="From"
                class="form-control"
                onChange={props.onFromChangeHandler}
                value={props.from}
              />
              <div class="label" id="from"></div>{" "}
              <span class="fas fa-dot-circle text-muted"></span>
            </div>
            <div class="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
              {" "}
              <input
                type="text"
                required
                placeholder="To"
                class="form-control"
                onChange={props.onToChangeHandler}
                value={props.to}
              />
              <div class="label" id="to"></div>{" "}
              <span class="fas fa-map-marker text-muted"></span>
            </div>
          </div>
          <div class="form-group d-sm-flex margin">
            <div class="d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative">
              {" "}
              <input
                type="date"
                required
                placeholder="Depart Date"
                class="form-control"
                
              />
              <div class="label" id="depart"></div>
            </div>
            <div class="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
              {" "}
              <input
                type="date"
                required
                placeholder="Return Date"
                class="form-control"
              
              />
              <div class="label" id="return"></div>
            </div>
          </div>
          <div class="form-group border-bottom d-flex align-items-center position-relative">
            {" "}
            <input
              type="text"
              required
              placeholder="Traveller(s)"
              class="form-control"
              onChange={props.onNoOfTicketChangeHandler}
              value={props.noOfTickets}
            />
            <div class="label" id="psngr"></div>{" "}
            <span class="fas fa-users text-muted"></span>
          </div>
          <div class="form-group my-3" onClick={()=>{props.onSearch()}}>
            <div class="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3">
              Search Flights{" "}
            </div>
          </div>
          <div class="form-group my-3" onClick={() => props.onEditModalShowHandler()}>
            <div class="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3">
              Add Flight{" "}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
