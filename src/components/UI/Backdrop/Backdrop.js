import React from "react";
import classes from "./Backdrop.module.css";
import { ImCancelCircle } from "react-icons/im";

const Backdrop = (props) => (
  <div className={classes.Backdrop}>
    <div className={classes.Cancle} onClick={props.cancleCreating}>
      <ImCancelCircle />
    </div>
  </div>
);

export default Backdrop;
