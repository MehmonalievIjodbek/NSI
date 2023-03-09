import React from "react";
import RightImg from "../icons/Right-img";

const ChemicalPage = () => {
  return (
    <div className="relative">
      <div className="home">
        <img src="/img/chemicals.jpg" alt="" />
        <div className="home-text">
          <p>Chemicals & Petrochemicals</p>
          <span>
            <RightImg />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChemicalPage;
