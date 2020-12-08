import React from "react";
import classes from "./Input.module.css";
import { BsExclamationTriangle } from "react-icons/bs";

const Input = (props) => {
  let inputElement = null;
  let classValueAll = [classes.Input];
  if (!props.valdity && props.touched) {
    classValueAll.push(classes.Error);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <div className={classes.container}>
          <input
            style={props.style}
            className={classValueAll.join(" ")}
            value={props.value}
            {...props.elementConfig}
            onChange={props.onChange}
          />
          {!props.valdity && props.touched ? (
            <BsExclamationTriangle color="red" />
          ) : null}
        </div>
      );
      break;

    case "textArea":
      inputElement = (
        <textarea
          value={props.value}
          {...props.elementConfig}
          onChange={props.onChange}
        />
      );
      break;

    case "radio":
      inputElement = (
        <div className={classes.InputRadio}>
          {props.elementConfig.map((value) => {
            return (
              <label key={value.value}>
                {value.displayValue}
                <input
                  type="radio"
                  name={value.name}
                  value={value.value}
                  onChange={props.onChange}
                />
              </label>
            );
          })}
        </div>
      );
      break;
  }

  return <React.Fragment>{inputElement}</React.Fragment>;
};

export default Input;
