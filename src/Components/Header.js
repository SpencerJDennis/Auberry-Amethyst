import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      <h1>Auberry Amethyst</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/Gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;