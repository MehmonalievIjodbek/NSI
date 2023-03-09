import React from "react";
import { Link } from "react-router-dom";
import OpenModal from "../Component/OpenModal";
import { navbar } from "../Component/static/navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-navbar">
          <div className="header-img">
            <Link to="/">
              <img src="/img/log.png" alt="" />
            </Link>
          </div>
          <div className="header-nav">
            {navbar.map((item) => (
              <div key={item.id}>
                <Link to={item.to}>
                  <p>{item.text}</p>
                </Link>
              </div>
            ))}
          </div>
          <OpenModal />
        </div>
      </div>
    </div>
  );
};

export default Header;
