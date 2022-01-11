import React from "react";
import "./style.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Icon } from "@material-ui/core";

const Footer = () => {
  return (
    <div className="Footer__End">
      <div className="Footer__Container">
        <div className="Footer__InnerComponents">
          <div className="Footer__leftText">
            <p className="FooterTopText">© 2021 SLOTHz</p>
            <h4 className="FooterBottomText">
              Made with love by the SLOTHz team!
            </h4>
          </div>
          <div className="Footer__RightText">
            <i id="Footer__Twitter" className="fab fa-twitter">
              <TwitterIcon className="Footer__Twitter" />
            </i>
            <i id="Footer__Discord" className="fab fa-discord">
              <TwitterIcon className="Footer__Twitter" />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
