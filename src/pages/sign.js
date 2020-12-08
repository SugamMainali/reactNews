import React from "react";
import scrollToTop from "../components/ScrollToTop";
import Login from "../container/Login";

const SigninPage = (props) => {
  console.log(props);
  return (
    <div>
      <scrollToTop />
      <Login {...props} />
    </div>
  );
};

export default SigninPage;
