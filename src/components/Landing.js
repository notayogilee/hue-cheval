import React, { useState, useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './Landing.scss';

import Navbar from './Navbar';
import Main from './Main';
import Beer from './Beer';
import Alphabet from './Alphabet';

const Landing = () => {
  useEffect(() => {
    M.AutoInit();
  });

  const [intro, setIntro] = useState(true);

  setTimeout(() => {
    setIntro(false)
  }, 4500);

  return (
    <div className="landing">

      { intro &&
        <div className="image">
        </div>
      }

      {!intro &&
        <Fragment>
          <Navbar />
          <Main />
          <Beer />
          <Alphabet />
        </Fragment>
      }
    </div>
  )
};

export default Landing;
