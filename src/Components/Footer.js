import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <div id="footer">
          <div className="mapStyle">
            <h4 className="footerTitle">Our Store Location</h4>
            <div className="map">
              <iframe
                src="https://maps.google.com/maps?q=33012%20Auberry%20rd%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                title="Auberry Amethyst"
              ></iframe>
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
        <br />
        <div className="socialmedia">
          <h4>Social Media</h4>
          <a className="socialmedialink" href="https://www.facebook.com/profile.php?id=100070268072006"><strong>Facebook</strong></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;