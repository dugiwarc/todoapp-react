import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Main</Link>
      <Link to="/api/todos">ToDos</Link>
      <Link to="/api/users/register">Register</Link>
      <Link to="/api/users/login">Login</Link>
    </nav>
  );
};

export default Navbar;
