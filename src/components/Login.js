import React, { Component } from "react";
// import classes from "./login.module.css";
import "./login.css";
import axios from "axios";
//Authorization: 'Bearer ' + token,
const Login = (props) => {
  const submitHandler = async (event) => {
    event.preventDefault();

    const res = await axios.post(
      "http://localhost:8050/login",
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
    props.setToken(res.data.token);
    props.setToken((p) => {
      console.log(p);
      return p;
    });
    localStorage.setItem("isLoggedIn", "1");
    localStorage.setItem('token', res.data.token)
    props.setIsLoggedIn(true);;
  };

  return (
    <div className="shell">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={submitHandler}>
            <h3>Sign In</h3>

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

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
