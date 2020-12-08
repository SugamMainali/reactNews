import React, { Component } from "react";
import Input from "../../components/Input";
import classes from "./NewAccount.module.css";
import { connect } from "react-redux";
import * as action from "../../Store/Action/index";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios/axios";
import ModalTwo from "../../components/UI/Modal/ModalTwo";

class NewAccount extends Component {
  state = {
    useDetails: {
      FirstName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "First Name",
        },
        value: "",
        validation: {
          require: true,
        },
        valid: false,
        touched: false,
      },
      SurName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "SurName",
        },
        value: "",
        validation: {
          require: true,
        },
        valid: false,
        touched: false,
      },
      Email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email",
        },
        value: "",
        validation: {
          require: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      Password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          require: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
      Gender: {
        elementType: "radio",
        elementConfig: [
          { value: "male", displayValue: "male", name: "gender" },
          { value: "female", displayValue: "female", name: "gender" },
        ],
        value: "",
        validation: {
          require: true,
        },
        valid: false,
        touched: false,
      },
    },
    formValidation: false,
  };

  checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.require) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      isValid = pattern.test(value) && isValid;
    }
    return isValid;
  };

  inputChangeHandler = (event, elementSelected) => {
    const updatedDetails = { ...this.state.useDetails };
    const updatedDetailsIndi = {
      ...updatedDetails[elementSelected],
    };
    updatedDetailsIndi.value = event.target.value;
    updatedDetailsIndi.touched = true;
    updatedDetailsIndi.valid = this.checkValidity(
      event.target.value,
      updatedDetailsIndi.validation
    );

    updatedDetails[elementSelected] = updatedDetailsIndi;
    let formIsValid = true;
    for (let elementSelected in updatedDetails) {
      formIsValid = updatedDetails[elementSelected].valid && formIsValid;
    }
    this.setState({
      useDetails: updatedDetails,
      formValidation: formIsValid,
    });
  };

  submitHadler = (event) => {
    event.preventDefault();
    const userValue = {};
    {
      for (let key in this.state.useDetails) {
        userValue[key] = this.state.useDetails[key].value;
      }
    }
    const order = {
      userDetails: userValue,
    };
    this.props.onGeetingPwandEmail(
      this.state.useDetails.Email.value,
      this.state.useDetails.Password.value,
      order
    );

    // this.props.onUserDetails(order);
  };

  onCanclingHandler = () => {
    this.props.onRemovingError();
  };

  render() {
    let errorMessageAuth = null;
    if (this.props.errorMessage) {
      errorMessageAuth = <div>{this.props.errorMessage.message}</div>;
    }

    let errorMessageDatabase = null;
    if (this.props.userErrorMessage) {
      errorMessageDatabase = <div>{this.props.userErrorMessage}</div>;
    }

    let userDetailsArray = [];
    for (let value in this.state.useDetails) {
      userDetailsArray.push({
        id: value,
        config: this.state.useDetails[value],
      });
    }
    const form = userDetailsArray.map((key) => {
      return (
        <Input
          key={key.id}
          touched={key.config.touched}
          valdity={key.config.valid}
          elementType={key.config.elementType}
          value={key.config.value}
          elementConfig={key.config.elementConfig}
          onChange={(e) => this.inputChangeHandler(e, key.id)}
        />
      );
    });

    //

    return (
      <React.Fragment>
        <ModalTwo
          show={this.props.userError || this.props.error}
          cancleError={this.onCanclingHandler}
        >
          {this.props.userError ? errorMessageDatabase : null}
          {this.props.error ? errorMessageAuth : null}
        </ModalTwo>
        <div className={classes.Container}>
          <form onSubmit={this.submitHadler} className={classes.Form}>
            {form}
            <button
              className={classes.Login}
              disabled={!this.state.formValidation}
            >
              Sign Up
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userError: state.userError !== null,
    error: state.errorSignUp !== null,
    userErrorMessage: state.userError,
    errorMessage: state.errorSignUp,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGeetingPwandEmail: (email, password, order) =>
      dispatch(action.authUp(email, password, order)),
    onRemovingError: () => dispatch(action.removeError()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewAccount);
