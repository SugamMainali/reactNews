import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Input from "../../components/Input";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../Store/Action/index";
import ModalTwo from "../../components/UI/Modal/ModalTwo";
import NewAccount from "../NewAccount/NewAccount";
import {
  Text,
  FormButton,
  FormLabel,
  FormH1,
  Form,
  FormContent,
  Icon,
  FormWrap,
  Container,
  Disp,
} from "./SigninElement";

class SignIn extends Component {
  state = {
    isFromValid: false,
    newAccount: false,
    logInDetails: {
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
    },
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
    const updatedDetails = { ...this.state.logInDetails };
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
    let formValid = true;
    for (let elementSelected in updatedDetails) {
      formValid = updatedDetails[elementSelected].valid && formValid;
    }

    this.setState({
      logInDetails: updatedDetails,
      isFromValid: formValid,
    });
  };

  onCreatingAccount = () => {
    this.setState({
      newAccount: true,
    });
  };

  onCancelCreatingAccount = () => {
    this.setState({
      newAccount: false,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onVerifyingEmailAndPw(
      this.state.logInDetails.Email.value,
      this.state.logInDetails.Password.value
    );

    // if (this.props.isAuthrised) {
    //   console.log(this.props.isAuthrised);
    //   this.props.history.push("/Main");
    // }
  };

  onCanclingHandler = () => {
    this.props.onRemovingError();
  };

  // logInHandler = () => {

  // };

  render() {
    let errorMessageAuth = null;
    if (this.props.errorMessage) {
      errorMessageAuth = <div>{this.props.errorMessage.message}</div>;
    }

    const style = {
      margin: "0.1em",
      // padding: "16px 16px",
      // marginBottom: "32px",
      // border: "none",
      // borderRadius: "4px",
    };
    let userDetailsArray = [];
    for (let value in this.state.logInDetails) {
      userDetailsArray.push({
        id: value,
        config: this.state.logInDetails[value],
      });
    }

    if (this.props.loading) {
      return <Spinner />;
    }

    let authRediret = null;
    if (this.props.isAuthrised) {
      authRediret = <Redirect to="/main" />;
    }

    const form = userDetailsArray.map((key) => {
      return (
        <React.Fragment key={key.id}>
          <FormLabel htmlFor="for">{key.id}</FormLabel>
          <Input
            style={style}
            touched={key.config.touched}
            valdity={key.config.valid}
            elementType={key.config.elementType}
            value={key.config.value}
            elementConfig={key.config.elementConfig}
            onChange={(e) => this.inputChangeHandler(e, key.id)}
          />
        </React.Fragment>
      );
    });

    return (
      <div>
        {authRediret}
        <ModalTwo show={this.props.error} cancleError={this.onCanclingHandler}>
          {this.props.error ? errorMessageAuth : null}
        </ModalTwo>
        <Modal
          show={this.state.newAccount}
          cancleCreating={this.onCancelCreatingAccount}
        >
          <NewAccount {...this.props} />
        </Modal>
        <Container>
          <FormWrap>
            <FormContent>
              <Icon to="/">listenNEWS</Icon>
              <Disp>
                Why , the need to read when you <br></br>can just listen and get
                updated
              </Disp>
              <FormButton type="submit" onClick={this.onCreatingAccount}>
                NEW ACCOUNT?
              </FormButton>
            </FormContent>
            <FormContent>
              <Form onSubmit={this.submitHandler}>
                <FormH1>Sign in to your account</FormH1>
                {form}
                <FormButton
                  type="submit"
                  onClick={this.logInHandler}
                  disabled={!this.state.isFromValid}
                >
                  Continue
                </FormButton>
                <Text>Forgot Password</Text>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthrised: state.token !== null,
    loading: state.loading,
    errorMessage: state.error,
    error: state.error !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onVerifyingEmailAndPw: (email, password) =>
      dispatch(actions.authIn(email, password)),
    onRemovingError: () => dispatch(actions.removeError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
