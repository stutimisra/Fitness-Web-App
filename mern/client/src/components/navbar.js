import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter, NavLink} from "react-router-dom";

// We import NavLink to utilize the react router.

// Here, we display our Navbar
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <BrowserRouter>
          <NavLink className="navbar-brand" to="/">
            MongoDB
          </NavLink>
        </BrowserRouter>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <BrowserRouter>
                <NavLink className="nav-link" to="/create">
                  Create Record
                </NavLink>
              </BrowserRouter>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;