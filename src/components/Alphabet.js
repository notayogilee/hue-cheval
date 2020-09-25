import React, { Fragment } from 'react';
import './Alphabet.scss';
import alphabetLogo from '../img/logo-alphabet.svg';
import alphabetVideo from '../img/alphabet.mp4';
import lamp from '../img/lampe.jpg';
import table from '../img/Table.jpg';
import sofa from '../img/Echelle.jpg';

const Alphabet = () => {

  const furniture = [lamp, table, sofa];

  return (

    <section id="alphabet" className="third-section">

      <video src={alphabetVideo} className="alphabet-video" autoPlay loop muted > </video>

      <h1><img src={alphabetLogo} alt="logo" /></h1>

      <div className="container">

        {/* {furniture.map(item =>

          <img src={item} alt="lamp" />


        )} */}


      </div>


    </section>

  )
};

export default Alphabet;
