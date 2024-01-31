import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/team" end>
              Team
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
