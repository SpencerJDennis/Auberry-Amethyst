import React from "react";
import auberryamethyst from "../photos/auberryamethyst.jpg";
import bottle from "../photos/Amethyst/bottle.jpg";
import circlecrystal from "../photos/Amethyst/circlecrystal.jpg";
import greenyellow from "../photos/Amethyst/greenyellow.jpg";
import orbamethyst from "../photos/Amethyst/orbamethyst.jpg";
import heart2 from "../photos/Amethyst/heart2.jpg";
import lamp2 from "../photos/Amethyst/lamp2.jpg";
import stonenet from "../photos/Amethyst/stonenet.jpg";

const Home = () => {
  return (
    <div id='aboutUs'>
      <h1 className="aboutUsHeader">About Auberry Amethyst</h1>
      <img className="auberry" src= {auberryamethyst} alt= "Auberry Amethyst Logo" height={300} width={300} />
      <p className="aboutText">
      We are a Online gem and crystal business. 🌙 We are located at 33012 Auberry rd. at the base of the beautiful Sierra Nevada mountains. We offer a wide variety of Crystals, Gems, and of course Amethyst! With our large selection, you can find the right crystal or gem to fit your energy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <br />
      <div id="homeimage">
        <img src={bottle} alt="Crystals in a bottle" height={200} width={200}/>
        <img src={circlecrystal} alt="A circular crystal with an opening in the center" height={200} width={200}/>
        <img src={greenyellow} alt="A green and yellow gemstone" height={200} width={200}/>
        <img src={orbamethyst} alt="An orb of amethyst" height={200} width={200}/>
        <img src={heart2} alt="A circular crystal with an opening in the center" height={200} width={200}/>
        <img src={lamp2} alt="A green and yellow gemstone" height={200} width={200}/>
        <img src={stonenet} alt="An orb of amethyst" height={200} width={200}/>
      </div>
    </div>
  );
};

export default Home;