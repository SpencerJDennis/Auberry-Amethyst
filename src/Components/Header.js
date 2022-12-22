import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      <div id="header">  
      <h1>Auberry Amethyst</h1>
      <ul className="headerlist">
        <li>
          <Link to="/" className="homelink">Home</Link>
        </li>
        <li>
          <Link to="/FAQ" className="faqlink">FAQ</Link>
        </li>
        <li>
          <Link to="/Gallery" className="gallerylink">Gallery</Link>
        </li>
        <li>
          <Link to="/ContactUs" className="contactlink">Contact Us</Link>
        </li>
      </ul>
      </div>
    </React.Fragment>
  );
}

export default Header;