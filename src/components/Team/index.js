import React from "react";
import "./style.css";
import CardThree from "../../components/CardThree";

const Team = () => {
  return (
    <div className="TeamComponent__Cover">
      <div className="TeamComponent__Header">
        <h2 className="TeamComponent__UperText">TEAM</h2>
        <p className="TeamComponent__BottomText">
          This is the group of crazy nerds that made SLOTHz a reality! Each of
          us is a key component in order to give you guys the NFT art you
          deserve. Each of us is here for the long run, we’re aiming to bring
          SLOTHz to the next level.
        </p>
        <div className="">
          <CardThree />
        </div>
        <p className="TeamComponent__BottomText TeamComponent__EndingText">
          We need you! If you feel you can bring something to the table please
          send us a DM.
        </p>
      </div>
    </div>
  );
};

export default Team;
