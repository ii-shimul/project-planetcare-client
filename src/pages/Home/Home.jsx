import React from 'react';
import Hero from './Hero';
import About from './About';
import Events from './Events';
import Donation from './Donation';
import Impact from "./Impact";


const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Events/>
      <Donation/>
      <Impact/>
    </div>
  );
};

export default Home;