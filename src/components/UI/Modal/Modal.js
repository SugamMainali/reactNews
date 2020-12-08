import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show ? (
        <div>
          <Backdrop cancleCreating={props.cancleCreating} />
          <div className={classes.Modal}>{props.children}</div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Modal;
