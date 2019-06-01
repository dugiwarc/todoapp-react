import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTodos } from "../../actions/todo";
import Todo from "./Todo";

const Todos = ({ getTodos, todo: { todos, loading } }) => {
  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return loading ? (
    <h1>...</h1>
  ) : (
    <Fragment>
      <div>
        {todos.todos.map(item => (
          <Todo todo={item} />
        ))}
      </div>
    </Fragment>
  );
};

Todos.propTypes = {
  getTodos: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { getTodos }
)(Todos);
