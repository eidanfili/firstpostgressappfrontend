import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.scss";

export default function Navbar() {
  return (
    <div className="Navbar-container">
      <Link className="Navbar-link" to="/">
        HOME
      </Link>
      <Link className="Navbar-link" to="/Add-a-friend">
        Add A Friend
      </Link>
      <Link className="Navbar-link" to="/">
        All Friends
      </Link>
    </div>
  );
}
