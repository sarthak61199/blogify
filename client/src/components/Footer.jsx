import React from "react";
import { IconContext } from "react-icons";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-temp">
      <div className="container">
        <div className="footer">
          <IconContext.Provider
            value={{
              color: "#000000",
              size: "2.5rem",
              style: { cursor: "pointer" },
            }}
          >
            <div className="icons">
              <FaInstagramSquare />
              <FaTwitterSquare />
              <FaFacebookSquare />
            </div>
          </IconContext.Provider>
          <p className="bottom">
            &copy; Sarthak Agarwal, {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
