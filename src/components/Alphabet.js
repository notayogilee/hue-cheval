import React from 'react';
import './Alphabet.scss';
import alphabetVideo from '../img/alphabet.mp4';

const Alphabet = () => {
  return (
    <div id="alphabet">
      <video id="alphabet-video" autoPlay loop muted >
        <source src={alphabetVideo} type="video/mp4" />
      </video>
    </div>
  )
};

export default Alphabet;
