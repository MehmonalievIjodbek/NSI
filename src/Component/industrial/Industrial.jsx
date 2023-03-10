import React from "react";
import Chemicals from "../Chemicals";
import HomePage from "../Home/HomePage";
import HomeButton from "../HomeButton";

const chemicals = {
  text: "Industrial",
  description: (
    <div>
      <p>
        We are living in the fourth industrial revolution: the digital
        interlinking of all processes right up to management and administrative
        systems. When modernizing industrial production facilities, the most
        important goals are to improve energy and material efficiency, optimize
        processes and make warehousing and logistics cost-efficient. The main
        challenge whilst pursuing these goals is the optimization of the
        human-machine interface using secure IoT solutions.
      </p>

      <p>
        Modernization of industrial facilities is today often to be embedded
        into a circular economy approach. NSI combines the knowledge of
        industrial processes with sustainable solutions and over decades
        developed project management know-how.
      </p>
      <p>
        Project implementation at NSI is often carried out in existing plants
        that are in operation. During this process, the minimization of shutdown
        times is the decisive criterion.
      </p>
    </div>
  ),
  selectText: "Fields of Expertise:",
};

const items = [
  {
    id: 1,
    text: "Metal industry",
  },
  {
    id: 2,
    text: "Mineral industry    ",
  },
  {
    id: 3,
    text: "Food and beverages industry",
  },
  {
    id: 4,
    text: "Personal and home care industry",
  },
  {
    id: 5,
    text: "Building materials industry",
  },
  {
    id: 6,
    text: "Paper industry",
  },
  {
    id: 7,
    text: "Plastics processing industry",
  },
  {
    id: 8,
    text: "Glass industry",
  },
  {
    id: 9,
    text: "Recycling of feedstocks",
  },
];

const banner = {
  src: "/img/industrial.jpg",
  text: "Industrial",
};

const Industrial = () => {
  return (
    <div>
      <div>
        <HomePage banner={banner} />
      </div>
      <div className="container">
        <HomeButton />
      </div>
      <div className="container">
        <Chemicals chemicals={chemicals} items={items} />
      </div>
    </div>
  );
};

export default Industrial;
