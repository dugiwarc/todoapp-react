import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbar = ({ auth: { isAuthenticated, loading } }) => {
  return (
    <nav>
      <Link to="/">Main</Link>
      <Link to="/api/todos">ToDos</Link>
      <Link to="/api/users/register">Register</Link>
      <Link to="/api/users/login">Login</Link>
    </nav>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Navbar);
