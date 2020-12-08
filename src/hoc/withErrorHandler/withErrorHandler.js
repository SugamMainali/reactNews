import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (Wrappedcomponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentDidMount() {
      axios.interceptors.request.use(
        (req) => {
          console.log("apple" + req);
          this.setState({ error: null });
          return req;
        },
        (error) => {
          console.log("error" + error);
          this.setState({ error: error });
        }
      );
      axios.interceptors.response.use(
        (response) => {
          this.setState({ error: null });
          return response;
        },
        (error) => {
          console.log("error" + error);
          this.setState({ error: error });
        }
      );
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <React.Fragment>
          <Modal
            show={this.state.error}
            cancleCreating={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <Wrappedcomponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
