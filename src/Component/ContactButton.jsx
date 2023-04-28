import React from "react";
import { Link } from "react-router-dom";
import SendIcon from "./icons/Telegram-icons";

const ContactButton = () => {
  return (
    <div className="home-button" style={{ display: "flex", justifyContent: "end" }}>
      <button>
        <Link className="home-button__link" to="/contact">
          <SendIcon /> Contact
        </Link>
      </button>
    </div>
  );
};

export default ContactButton;
