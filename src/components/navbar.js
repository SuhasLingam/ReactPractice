import React from "react";
import "./styles/navbar.css";

const test = () => {
  alert("working");
};

const Navbar = () => {
  return (
    <div className="mainNav">
      <ul>
        <li>
          <a href="#">Home Page</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <button className="but" href="#" onClick={test}>
            Connect Wallet
          </button>
          <div className="shadow"></div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
