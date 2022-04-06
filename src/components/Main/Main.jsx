import React from 'react';
import './Main.css';
import Hero from '../Hero/Hero';
import Testimonial from '../Testimonial/Testimonial';

const Main = () => {
  return (
    <main className='main'>
      <Hero />
      <Testimonial />
    </main>
  );
};

export default Main;
