import React from "react";
import auberryamethyst from "../../photos/auberryamethyst.jpg";

const AboutUs = () => {
  return (
    <div id='aboutUs'>
      <h1 className="aboutUsHeader">About Auberry Amethyst</h1>
      <img className="auberry" src= {auberryamethyst} alt= "Auberry Amethyst Logo" />
      <p className="aboutText">
        filler
      </p>
    </div>
  );
};

export default AboutUs;