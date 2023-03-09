import React from "react";
import Chemicals from "../Chemicals";
import HomePage from "../Home/HomePage";
import HomeButton from "../HomeButton";

const chemicals = {
  text: "Underground Storage",
  description: (
    <div>
      <p>
        In the energy industry, the storage of natural gas is important both to
        provide strategic reserves and to meet peak load demands.
      </p>

      <p>
        The simulation of all injection and withdrawal processes involved in the
        operation of gas storage facilities, the optimization of all plant
        components, the implementation of short switching and ramp-up times, and
        the installation of fully remote controlled systems are all part of the
        core competencies of NSI. Underground storage facilities are also used
        for mineral oil and mineral oil products.
      </p>
    </div>
  ),
  selectText: "Fields of Expertise:",
};

const items = [
  {
    id: 1,
    text: "Peak shaving plants",
  },
  {
    id: 2,
    text: "Seasonal storage plants",
  },
  {
    id: 3,
    text: "Storage caverns",
  },
  {
    id: 4,
    text: "Facilities for depleted oil and gas fields",
  },
];
const banner = {
  src: "/img/underground.jpg",
  text: "Underground Storage",
};

const UnderGround = () => {
  return (
    <div>
      <div>
        <HomePage banner={banner} />
      </div>
      <div className="container">
        <HomeButton />
      </div>
      <div>
        <Chemicals chemicals={chemicals} items={items} />
      </div>
    </div>
  );
};

export default UnderGround;
