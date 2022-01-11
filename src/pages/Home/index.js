import React from "react";
import Header from "../../components/Header/index";
import CardCollection from "../../components/CardCollection/index";
import JoinSolthz from "../../components/JoinSolthz/index";
import MintButn from "../../components/MintButn/index";
import Card1 from "../../components/Card1/index";
import Cardtwo from "../../components/Cardtwo/index";
import MintCard from "../../components/MintCard/index";
import CardThree from "../../components/CardThree";
import Stats from "../../components/Stats";
import JoinCommunity from "../../components/JoinCommunity";
import Footer from "../../components/Footer";
import Team from "../../components/Team";
import FaqComponent from "../../components/FaqComponent";
import "./style.css";

const Home = () => {
  return (
    <>
      <div>
        <JoinSolthz />
      </div>
      <div>
        <Card1 />
      </div>
      <div>
        <MintButn />
      </div>
      <div>
        <Cardtwo />
      </div>
      <div>
        <MintCard />
      </div>
      <div className="cardthreeback">
        <CardThree />
      </div>
      {/* <div>
        <Stats />
      </div> */}
      <div>
        <JoinCommunity />
      </div>
      <div>
        <Team />
      </div>
      <div>
        <FaqComponent />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
