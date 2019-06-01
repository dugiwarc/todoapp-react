import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "./types";

import setAuthToken from "../utils/setAuthToken";
import getCookie from "../utils/getCookieToken";

// Load User
export const loadUser = () => async dispatch => {
  const token = getCookie();
  if (token) {
    setAuthToken(token);
  }
  try {
    const res = await axios.get("/api/users/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/users/register", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    // dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "warning")));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

export const login = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post("/api/users/login", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    // dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "warning")));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};
