import React from 'react';
//import PropTypes from 'prop-types';
import amethyst from '../../photos/Amethyst/amethyst.jpg';
import amethystbox from '../../photos/Amethyst/amethystbox.jpg';
import amethystmoon from '../../photos/Amethyst/amethystmoon.jpg';
import bluecrystal from '../../photos/Amethyst/bluecrystal.jpg';
import butterfly from '../../photos/Amethyst/butterfly.jpg';
import crack from '../../photos/Amethyst/crack.jpg';
import crystalbeads from '../../photos/Amethyst/crystalbeads.jpg';
import crystalfine from '../../photos/Amethyst/crystalfine.jpg';
import crystalpillar from '../../photos/Amethyst/crystalpillar.jpg';
import heart from '../../photos/Amethyst/heart.jpg';
import lamp from '../../photos/Amethyst/lamp.jpg';
import mortar from '../../photos/Amethyst/mortar.jpg';
import multicolor from '../../photos/Amethyst/multicolor.jpg';
import necklace from '../../photos/Amethyst/necklace.jpg';
import necklace2 from '../../photos/Amethyst/necklace2.jpg';
import necklace3 from '../../photos/Amethyst/necklace3.jpg';
import orb from '../../photos/Amethyst/orb.jpg';
import pedestal from '../../photos/Amethyst/pedestal.jpg';
import purplewhite from '../../photos/Amethyst/purplewhite.jpg';
import rawamethyst from '../../photos/Amethyst/rawamethyst.jpg';
import skull from '../../photos/Amethyst/skull.jpg';
import slate from '../../photos/Amethyst/slate.jpg';
import tree from '../../photos/Amethyst/tree.jpg';
import turquoise from '../../photos/Amethyst/turquoise.jpg';
import yellowbeads from '../../photos/Amethyst/yellowbeads.jpg';

const Gallery = () => {
  return (
    <div id='galleryStyle'>
      <h1 className="galleryHeader">Our Products</h1>
      <div id='gallery'>
        <div className='photo'>
          <img src={amethyst} alt="A picture of an amethyst" height={200} width={200}/>
          <img src={amethystbox} alt="A box of raw Amethyst" height={200} width={200}/>
          <img src={amethystmoon} alt="A cresent amethyst moon" height={200} width={200}/>
          <img src={bluecrystal} alt="A picture of a blue crystal" height={200} width={200}/>
          <img src={butterfly} alt="A butterfly crystal" height={200} width={200}/>
          <img src={crack} alt="A cracked crystal" height={200} width={200}/>
          <img src={crystalbeads} alt="crystal bead bracelet" height={200} width={200}/>
          <img src={crystalfine} alt="A translucent fine crystal" height={200} width={200}/>
          <img src={crystalpillar} alt="Four crystal pillars" height={200} width={200}/>
          <img src={heart} alt="A crystal heart" height={200} width={200}/>
          <img src={lamp} alt="A lamp made from crystal" height={200} width={200}/>
          <img src={mortar} alt="A mortar and pestle" height={200} width={200}/>
          <img src={multicolor} alt="A multicolor crystal" height={200} width={200}/>
          <img src={necklace} alt="Necklace 1" height={200} width={200}/>
          <img src={necklace2} alt="Necklace 2" height={200} width={200}/>
          <img src={necklace3} alt="Necklace 3" height={200} width={200}/>
          <img src={orb} alt="A crystal orb" height={200} width={200}/>
          <img src={pedestal} alt="A crystal on a pedestal" height={200} width={200}/>
          <img src={purplewhite} alt="A purple and white Amethyst" height={200} width={200}/>
          <img src={rawamethyst} alt="Chunks of raw Amethyst" height={200} width={200}/>
          <img src={skull} alt="A crystal skull" height={200} width={200}/>
          <img src={slate} alt="Crystals on a crystal slate" height={200} width={200}/>
          <img src={tree} alt="A tree made from Amethyst" height={200} width={200}/>
          <img src={turquoise} alt="Turquoise stones" height={200} width={200}/>
        </div>
      </div>
    </div>
  )
}

export default Gallery;