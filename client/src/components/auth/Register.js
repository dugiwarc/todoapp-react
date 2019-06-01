import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

// import axios from "axios";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: ""
  });

  const { email, password, password2 } = formData;

  const onChange = evt =>
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });

  const onSubmit = async evt => {
    evt.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "warning");
    } else {
      register({ email, password });
      // const newUser = {
      //   email,
      //   password
      // };
      // try {
      //   const config = {
      //     headers: {
      //       "Content-Type": "application/json"
      //     }
      //   };

      //   const body = JSON.stringify(newUser);

      //   const res = await axios.post("/api/users/register", body, config);

      //   console.log("Response", res.data);
      // } catch (err) {
      //   console.error(err.response.data);
      // }
    }
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
        <div>
          <input
            type="password"
            placeholder="repeat password"
            name="password2"
            value={password2}
            onChange={evt => onChange(evt)}
            required
          />
        </div>
        <input type="submit" />
      </form>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
