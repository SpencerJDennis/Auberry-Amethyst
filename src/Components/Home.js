import React from "react";
import auberryamethyst from "../photos/auberryamethyst.jpg";

const Home = () => {
  return (
    <div id='aboutUs'>
      <h1 className="aboutUsHeader">About Auberry Amethyst</h1>
      <img className="auberry" src= {auberryamethyst} alt= "Auberry Amethyst Logo" height={300} width={300} />
      <p className="aboutText">
        filler
      </p>
    </div>
  );
};

export default Home;