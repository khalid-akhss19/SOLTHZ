import React from "react";
import CardCollection from "../CardCollection";
import Data from "./Data";
import { Grid } from "@material-ui/core";
import "./style.css";

const Card1 = () => {
  return (
    <>
      <Grid container className="card1Container">
        <Grid container spacing={2} className="flexGrid">
          {Data.map(({ img }) => {
            return <CardCollection img={img} />;
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Card1;
