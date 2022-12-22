import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <div id="footer">
        <h1 className="footerTitle">Our Store Location</h1>
        <div className="mapStyle">
          <iframe
            src="https://maps.google.com/maps?q=33012%20Auberry%20rd%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            title="Auberry Amethyst"
          ></iframe>
        </div>
        <br />
        <br />
        <div className="mapText">
          <a className="shopName" href="https://auberryamethyst.com/">
            <strong>Auberry Amethyst</strong>
          </a>
          <p>
            33012 Auberry Rd.
            <br />
            Auberry, CA 93602
            <br />
            (559) 955-6118
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;