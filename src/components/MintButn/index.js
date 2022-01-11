import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const MintButn = () => {
  return (
    <div className="outerMintbtn">
      <div className="mintnowbtn">
        <Link to="/connectwallet" className="navlink">
          <h2 className="btnMint">MINT NOW!</h2>
        </Link>
      </div>
    </div>
  );
};

export default MintButn;
