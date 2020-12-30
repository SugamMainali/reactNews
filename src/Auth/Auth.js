import Navbar from "../components/Navbar";
import classes from "./Auth.module.css";
import { connect } from "react-redux";
import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useState, useEffect } from "react";
import NewsCards from "../components/NewsCards/NewsCards";

const Auth = (props) => {
  // if (props.isAutherized) {

  // }
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key:
        "4b6b6a1ad8d4ae474f05b364f817ef8f2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(command);
          console.log(articles);
          setNewsArticles(articles);
        }
      },
    });
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <React.Fragment>
      <Navbar {...props} />
      <NewsCards article={newsArticles} />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAutherized: state.token !== null,
  };
};

export default connect(mapStateToProps)(Auth);
