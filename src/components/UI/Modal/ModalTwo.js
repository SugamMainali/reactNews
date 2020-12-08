import React from "react";
import classes from "./ModalTwo.module.css";
import { FiXOctagon } from "react-icons/fi";

const ModalTwo = (props) => {
  return (
    <React.Fragment>
      {props.show ? (
        <div className={classes.container}>
          <div className={classes.ModalTwo}>
            {props.children}
            <div className={classes.Cancle} onClick={props.cancleError}>
              <FiXOctagon />
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default ModalTwo;
