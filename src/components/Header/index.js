import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import { IconButton, Button } from "@material-ui/core";
import DrawersButton from "./DrawerComponent";
const Header = () => {
  const [open, setOpen] = React.useState(false);
  const hanleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const match = useMediaQuery("(max-width: 960px)");
  // const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className="outerContainer">
      <div className="leftdiv">
        <div className="leftimg">
          <img
            src="http://nigeria.alshumaal.com/static/media/logo.14c52e78.png"
            className="logo"
          />
        </div>
        <div className="lefttitle">
          <h2>
            SOLTHZ <br /> <span className=" header__small">Aka Datusing</span>
          </h2>
        </div>
      </div>
      {match ? (
        <IconButton
          color="inherit"
          aria-label="opendrawer"
          onClick={hanleDrawerOpen}
          edge="start"
          style={{ color: "white" }}
        >
          <Menu />
        </IconButton>
      ) : (
        <>
          <Link id="link" to="home">
            Home
          </Link>
          <Link id="link" to="home">
            Mint
          </Link>
          <Link id="link" to="home">
            Stats
          </Link>
          <Link id="link" to="home">
            Roadmap
          </Link>
          <Link id="link" to="home">
            Team
          </Link>
          <Link id="link" to="home">
            FAQ
          </Link>
          <div className="ctw">
            <Button id="CtW" variant="contained" color="secondary">
              Connect to Wallet
            </Button>
          </div>
        </>
      )}
      <DrawersButton open={open} handleDrawerClose={handleDrawerClose} />
    </div>
  );
};

export default Header;
