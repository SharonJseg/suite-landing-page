import React from 'react';
import './Testimonial.css';

import cmoImage from '../../images/image-jeremy-large@2x.webp';
import patternBlur from '../../images/pattern-blur.svg';
import smallLine from '../../images/pattern-curved-line-2.svg';

const Testimonial = () => {
  return (
    <section className='testimonial'>
      <div className='testimonial__image-container'>
        <img
          className='testimonial__image'
          src={cmoImage}
          alt='jeremy robinson'
        />
        <img className='testimonial__pattern' src={patternBlur} alt='' />
      </div>
      <div className='testimonial__curvedLine'>
        <img src={smallLine} alt='' />
      </div>
      <div className='testimonial__content'>
        <h2 className='testimonial__content-title'>
          <span className='testimonial__content-title_regular'>it just </span>
          works.
        </h2>
        <figure className='testimonial__content-quote-container'>
          <blockquote className='testimonial__content-quote'>
            “I really like how it is an all-in-one solution that handle many of
            the tasks that you would normally need separate tools to do the same
            job. This thing is a miracle worker.”
          </blockquote>
          <figcaption className='testimonial__content-caption'>
            JEREMY ROBINSON
            <span className='testimonial__content-caption_span'>CMO, FYLO</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonial;
