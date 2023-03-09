import React from "react";
import { Link } from "react-router-dom";
import RightIcon from "../icons/Right-icon";
import HomeButton from "../HomeButton";

const dataSelect = [
  {
    id: 1,
    text: "Pipelines",
    to: "/pipelines/",
  },
  {
    id: 2,
    text: "Refining",
    to: "/refining/",
  },
  {
    id: 3,
    text: "Tank Farms & Terminals",
    to: "/tank-farms-and-terminals/",
  },
  {
    id: 4,
    text: "Underground Storage",
    to: "/underground-storage/",
  },
  {
    id: 5,
    text: "Upstream",
    to: "/upstream/",
  },
];

const selectText = {
  text: "Oil, Gas & Industrial",
  label: "We are optimizing production processes! ",
  description:
    "NSI uses the expertise gained from successful oil and gas projects to reduce emissions and increase efficiency across all sectors. In doing so, we are following the path towards a carbon-free circular economy in order to ensure a good quality of life for future generations.",
  selectText: "NSI focuses on the following business areas:",
};

const HomeSelect = () => {
  return (
    <div className="container">
      <HomeButton />
      <div className="homeSelect">
        <div className="homeSelect-left">
          <h2>{selectText.text}</h2>
          <p>{selectText.label}</p>
          <h6>{selectText.description}</h6>
        </div>
        <div className="homeSelect-right">
          <h3>{selectText.selectText}</h3>
          <div>
            {dataSelect.map((item) => (
              <div className="homeSelect-right__container" key={item.id}>
                <Link className="homeSelect-right__container-link" to={item.to}>
                  <p>{item.text}</p>
                  <span>
                    <RightIcon />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSelect;
