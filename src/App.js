import React from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  faAnchor,
  faBuilding,
  faHockeyPuck,
  faLaptopCode,
  faEnvelope
 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './components/Navbar.js';
import Landing from './components/Landing.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio.js';
import Footer from './components/Footer.js';
import Animate from './components/Animate.js';

library.add(fab, faCheckSquare, faCoffee, faAnchor, faBuilding, faHockeyPuck, faLaptopCode, faEnvelope);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
