import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <>
      <Link to="/">Home</Link>&nbsp;-&nbsp;
      <Link to="/login">Login</Link>
    </>
  );
};

export default Nav;
