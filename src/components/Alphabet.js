import React, { useState, useEffect } from 'react';
import './Alphabet.scss';
import alphabetLogo from '../img/logo-alphabet.svg';
import alphabetVideo from '../img/alphabet.mp4';
import lamp from '../img/lampe.jpg';
import table from '../img/Table.jpg';
import ladder from '../img/Echelle.jpg';

const Alphabet = () => {

  const furniture = [lamp, table, ladder];
  const [image, setImage] = useState(lamp);


  useEffect(() => {
    return furniture.map((item, i) => {
      setInterval(() => {
        setImage(item);
      }, (i + 1) * 5000);
    })
  }, [])

  return (
    <section id="alphabet" className="third-section">

      <video src={alphabetVideo} className="alphabet-video" autoPlay loop muted > </video>

      <div className="container">
        <img src={image}></img>
      </div>

    </section>
  )
};

export default Alphabet;
