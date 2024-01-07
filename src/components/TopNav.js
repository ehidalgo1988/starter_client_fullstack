import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function TopNav() {
  return (
    <>
      <ul className="nav justify-content-center bg-body-tertiary p-2">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/all-users">
            Manage User
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/all-products">
            Manage Product
          </NavLink>
        </li>
      </ul>
      
    </>
  );
}
