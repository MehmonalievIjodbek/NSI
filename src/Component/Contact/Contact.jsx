import React from "react";
import Chemicals from "../Chemicals";
import HomePage from "../Home/HomePage";
import HomeButton from "../HomeButton";
const chemicals = {
  text: "Your direct contact to NSI",
  description: (
    <div>
      <p>
        It is of great importance to NSI to be responsive to its clients and to
        persons interested in NSI.
      </p>
    </div>
  ),
};

const items = [
  {
    id: 1,
    text: "Connect with us",
  },
];

const banner = {
  src: "/img/contact.jpg",
  text: "Contact",
};
const Contact = () => {
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
      <div className="container">
        <div className="contact">
          <h2>Your contact for Oil, Gas & Industrial</h2>
          <p>
            Executive Vice President (EVP), Group Director Oil, Gas & Industrial
          </p>
          <div className="contact-card">
            <img src="/img/avatar.png" alt="" />
            <div>
              <h3>Christian Heinz</h3>
              <div className="contact-card__number">
                <span>E-mail</span>
                <a href="mailto: abc@example.com">Send Email</a>
              </div>
              <div className="contact-card__number">
                <span>Phone</span>
                <a href="tel: +998910000000">+998910000000</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
