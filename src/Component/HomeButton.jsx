import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "./icons/Home-icons";

const HomeButton = () => {
  return (
    
    <div className="home-button">
      <button>
        <Link className="home-button__link" to="/">
          <HomeIcon /> Home
        </Link>
      </button>
    </div>
  );
};

export default HomeButton;
