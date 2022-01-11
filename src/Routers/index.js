import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cwallet from "../pages/Wallet";
import Header from "../components/Header";
import Mint from "../pages/Mint";
import Stats from "../pages/Stats";
import Roadmap from "../pages/Roadmap";
import Team from "../pages/Team";
import FAQ from "../pages/FAQ";

const Routers = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/connectwallet" element={<Cwallet />} />
          <Route exact path="/mint" element={<Mint />} />
          <Route exact path="/stats" element={<Stats />} />
          <Route exact path="/roadmap" element={<Roadmap />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/FAQ" element={<FAQ />} />
        </Routes>
      </Router>
    </>
  );
};
export default Routers;
