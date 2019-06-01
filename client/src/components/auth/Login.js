import React, { Fragment, useState } from "react";

const Login = () => {
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

  const onSubmit = evt => {
    evt.preventDefault();
    console.log("Success");
  };

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

export default Login;
