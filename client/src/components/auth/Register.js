import React, { Fragment, useState } from "react";
// import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
      console.log("Password do not match");
    } else {
      console.log("Success");
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

export default Login;
