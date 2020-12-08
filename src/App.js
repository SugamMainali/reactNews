import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/index";
import SigninPage from "./pages/sign";
import Auth from "./Auth/Auth";
import { connect } from "react-redux";
import * as actions from "./Store/Action/index";
import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignUp();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/singin" exact component={SigninPage} />
            {this.props.isAutherised ? (
              <Route path="/Main" exact component={Auth} />
            ) : (
              <Route path="/" exact component={Home} />
            )}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAutherised: state.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
