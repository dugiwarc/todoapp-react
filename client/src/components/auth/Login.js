import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = evt =>
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });

  const onSubmit = async evt => {
    evt.preventDefault();
    console.log("HERE");
    login({ email, password });
  };

  if (isAuthenticated) {
    return <Redirect to="/api/todos" />;
  }

  return (
    <Fragment>
      <form onSubmit={evt => onSubmit(evt)}>
        <div>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={evt => onChange(evt)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={evt => onChange(evt)}
            required
          />
        </div>
        <input type="submit" />
      </form>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
