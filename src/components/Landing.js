import React, { useState, Fragment } from 'react';
import './Landing.scss';
import Navbar from './Navbar';

const Landing = () => {

  const [intro, setIntro] = useState(true);

  setTimeout(() => {
    setIntro(false)
  }, 4500);

  return (

    <div className="container">

      { intro &&
        <div className="image">
        </div>
      }
      {!intro &&
        <Fragment>
          <Navbar />
          <section className="main">
            <h1 id="slide-right">Signalétique — RIDM 2019</h1>
            <p id="slide-left">
              Réserve et classicisme caractérisent le langage signalétique que nous avons désigné pour l’édition 2019 des Rencontres internationales du documentaire de Montréal, une sobriété qui entre en cohérence avec celle de la Cinémathèque québécoise.
          </p>
          </section>
          <section className="beer">
            <h1 id="slide-right">Articulation visuelle — Boldwin</h1>
            <p id="slide-left">
              Le succès retentissant de l’identité que nous avons développé pour les bières biologiques Boldwin nous a conduit à déployer son langage sur tout un essaim de canevas. Allant de la création de contenu rédactionnel, à l’organisation rythmique de leurs nouveaux signes sur des affiches, des balluchons et des paquetages. Nous constatons avec plaisir que le symbolisme du territoire québécois mobilise l’intérêt.
          </p>
          </section>

        </Fragment>
      }
    </div>
  )
};

export default Landing;
