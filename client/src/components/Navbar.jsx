import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-temp">
      <div className="container">
        <div className="navbar">
          <h1>Blogify</h1>
          <ul>
            <li>
              <Link to="/" className="links">
                Sports
              </Link>
            </li>
            <li>
              <Link to="/" className="links">
                Entertainment
              </Link>
            </li>
            <li>
              <Link to="/" className="links">
                Tech
              </Link>
            </li>
          </ul>
          <div className="auth-btn">
            <Link to="/register" className="btn">
              Register
            </Link>
            <Link to="/login" className="btn btn-filled">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
