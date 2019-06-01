import axios from "axios";
import { setAlert } from "./alert";
import { GET_TODOS, TODO_ERROR, DELETE_TODO } from "./types";

// Get todo
export const getTodos = () => async dispatch => {
  try {
    const res = await axios.get("/api/todos");
    dispatch({
      type: GET_TODOS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TODO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const deleteTodo = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/todos/${id}`);
    dispatch({
      type: DELETE_TODO,
      payload: id
    });

    dispatch(setAlert("Todo removed", "success"));
  } catch (err) {
    dispatch({
      type: TODO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
