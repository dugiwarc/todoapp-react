import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteTodo } from "../../actions/todo";

const Todo = ({ deleteTodo, todo: { _id, title } }) => {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={e => deleteTodo(_id)}>Delete</button>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteTodo }
)(Todo);
