import * as actionTypes from "../Action/actionTypes";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  newToken: null,
  userError: null,
  errorSignUp: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        newToken: null,
        userId: null,
        token: null,
      };

    case actionTypes.REMOVE_ALL_ERROR:
      return {
        ...state,
        error: null,
        userError: null,
        errorSignUp: null,
      };

    case actionTypes.AUTH_SIGN_UP_MAIN_FAIL:
      return {
        ...state,
        errorSignUp: action.errorSingUp,
        loading: false,
      };

    case actionTypes.USER_ERROR_DISPLAY:
      return {
        ...state,
        userError: action.userError,
      };

    case actionTypes.AUTH_SIGN_UP_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actionTypes.AUTH_SIGN_UP_SUCESS:
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        newToken: action.refreshToken,
        loading: false,
      };

    case actionTypes.AUTH_SIGN_UP_START:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case actionTypes.AUTH_SIGN_UP_MAIN_SUCESS:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
