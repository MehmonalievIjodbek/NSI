import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Layout from "./Layout/Layout";
import ChemicalPetro from "./Component/chemicals/ChemicalPetro";
import GoToTop from "./Component/GoToTop";
import Industrial from "./Component/industrial/Industrial";
import Liquefied from "./Component/Liquefied/Liquefied";
import Mining from "./Component/Mining/Mining";
import Pipelines from "./Component/Pipelines/Pipelines";
import Refining from "./Component/Refining/Refining";
import TankFarms from "./Component/TankFarms/TankFarms";
import UnderGround from "./Component/UnderGround/UnderGround";
import Upstream from "./Component/Upstream/Upstream";
import Contact from "./Component/Contact/Contact";
import OurProject from "./Component/OurProject/OurProject";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/chemicals-petrochemicals/"
            element={<ChemicalPetro />}
          />
          <Route path="/industrial/" element={<Industrial />} />
          <Route path="/liquefied-natural-gas-lng/" element={<Liquefied />} />
          <Route path="/mining/" element={<Mining />} />
          <Route path="/pipelines/" element={<Pipelines />} />
          <Route path="/refining/" element={<Refining />} />
          <Route path="/tank-farms-and-terminals/" element={<TankFarms />} />
          <Route path="/underground-storage/" element={<UnderGround />} />
          <Route path="/upstream/" element={<Upstream />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/our-project/" element={<OurProject />} />
        </Routes>
        <GoToTop />
      </Layout>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
