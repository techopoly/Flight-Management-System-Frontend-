import React, { Component } from "react";
import "./login.css";
import axios from 'axios'

const Signup =  (props) => {

  const submitHandler = async (event) => {
    event.preventDefault();

    const res = await axios.post(
      "http://localhost:8050/createAccount",
      {
        username: props.username,
        email: props.email,
        password: props.password,
      },
      {
        headers: {
          // 'application/json' is the modern content-type for JSON, but some
          // older servers may use 'text/json'.
          // See: http://bit.ly/text-json
          "Content-Type": "application/json"
        },
      }
    );

    // res.data.headers["Content-Type"]; // text/json
    console.log(res.data)
  };

  return (
    <div className="shell">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={submitHandler}>
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                value={props.username}
                onChange={(event) => {
                  props.setUsername(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={props.email}
                onChange={(event) => {
                  props.setEmail(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={props.password}
                onChange={(event) => {
                  props.setPassword(event.target.value);
                }}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
            <p className="forgot-password text-right">
              Already registered <a href="#">sign in?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
