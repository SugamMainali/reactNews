import React, { Component } from "react";
import Navbar from "../components/Navbar";
import classes from "./Auth.module.css";

class Auth extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar {...this.props} />
        <h3 className={classes.AuthContainer}>Welcome Authorised User</h3>
      </React.Fragment>
    );
  }
}

export default Auth;
