import React from "react";
import CardCollThree from "../../components/CardCollThree";
import Dataa from "./Dataa";
import { Grid } from "@material-ui/core";
import "./style.css";

const CardThree = () => {
  return (
    <>
      <Grid container className="card3Container">
        <Grid container spacing={2} className="flexGridThree">
          {Dataa.map(({ img, title }) => {
            return <CardCollThree img={img} title={title} />;
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default CardThree;
