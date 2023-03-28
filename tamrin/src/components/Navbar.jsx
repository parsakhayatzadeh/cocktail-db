import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-center">
        <Link to={"/"}>
          <img src="../../public/logo.svg" alt="log" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
