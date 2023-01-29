import React from "react";
import { IconContext } from "react-icons";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-temp">
      <div className="container">
        <div className="footer">
          <IconContext.Provider
            value={{
              color: "#cb51f3",
              style: { cursor: "pointer", height: "2rem", width: "2rem" },
            }}
          >
            <div className="icons">
              <FaInstagram />
              <FaTwitter />
              <FaFacebook />
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
