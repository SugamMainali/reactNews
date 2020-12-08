import * as actionTypes from "./actionTypes";
import axios from "./../../axios/axios";

export const authUpSucess = (token, userId, refreshToken) => {
  return {
    type: actionTypes.AUTH_SIGN_UP_SUCESS,
    idToken: token,
    userId: userId,
    refreshToken: refreshToken,
  };
};

export const removeError = () => {
  return {
    type: actionTypes.REMOVE_ALL_ERROR,
  };
};
export const authUpFail = (error) => {
  return {
    type: actionTypes.AUTH_SIGN_UP_FAIL,
    error: error,
  };
};

export const authSignUpSucess = () => {
  return {
    type: actionTypes.AUTH_SIGN_UP_MAIN_SUCESS,
  };
};

export const authSignUpFail = (error) => {
  return {
    type: actionTypes.AUTH_SIGN_UP_MAIN_FAIL,
    errorSingUp: error,
  };
};

export const authUpStart = () => {
  return {
    type: actionTypes.AUTH_SIGN_UP_START,
  };
};

export const logOutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("NewToken");
  localStorage.removeItem("timeOut");
  localStorage.removeItem("user");
  return {
    type: actionTypes.LOGOUT_USER,
  };
};

export const logOutUserTime = (time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logOutUser());
    }, time * 1000);
  };
};

export const userDetailError = (userError) => {
  return {
    type: actionTypes.USER_ERROR_DISPLAY,
    userError: userError,
  };
};

export const authServerData = (orderData) => {
  return (dispatch) => {
    axios
      .post("/useDetails", orderData)
      .then((response) => {
        console.log("r" + response);
        // this.props.history.push("/singin");
      })
      .catch((error) => {
        dispatch(userDetailError(error.message));
      });
  };
};

export const authUp = (email, password, orderData) => {
  return (dispatch) => {
    dispatch(authUpStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2vjv78FUBLkKC8FjQdPAqRVRO3MW13GE",
        authData
      )
      .then((response) => {
        dispatch(authSignUpSucess());
        dispatch(authServerData(orderData));
        // response.data.idToken,
        // response.data.userId,
        // response.data.refreshToken
      })
      .catch((error) => {
        dispatch(authSignUpFail(error.response.data.error));
        console.log(error);
      });
  };
};

export const authIn = (email, password) => {
  return (dispatch) => {
    dispatch(authUpStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2vjv78FUBLkKC8FjQdPAqRVRO3MW13GE",
        authData
      )
      .then((response) => {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("NewToken", response.data.refreshToken);
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("timeOut", expirationDate);
        localStorage.setItem("user", response.data.localId);
        dispatch(
          authUpSucess(
            response.data.idToken,
            response.data.localId,
            response.data.refreshToken
          )
        );
        dispatch(logOutUserTime(response.data.expiresIn));
      })
      .catch((error) => {
        dispatch(authUpFail(error.response.data.error));
        console.log(error);
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    let token = localStorage.getItem("token");
    if (!token) {
      dispatch(logOutUser());
    } else {
      const newToken = localStorage.getItem("NewToken");
      const userId = localStorage.getItem("user");
      const expirationTime = new Date(localStorage.getItem("timeOut"));
      if (expirationTime < new Date()) {
        dispatch(logOutUser());
      } else {
        dispatch(authUpSucess(token, userId, newToken));
        dispatch(
          logOutUserTime(
            (expirationTime.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};

// if (expirationTime > new Date() && token) {
//   dispatch(authUpSucess((token = newToken), userId, newToken));
//   dispatch(
//     logOutUserTime(expirationTime.getSeconds() - new Date().getSeconds())
//   );
