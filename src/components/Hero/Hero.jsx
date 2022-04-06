import React from 'react';
import curvedline from '../../images/pattern-curved-line-1.svg';
import heroImage from '../../images/image-hero-portrait@2x.webp';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__cta'>
        <div className='hero__cta-header-container'>
          <div className='curvedline__container'>
            <img className='curvedline' src={curvedline} alt='' />
          </div>
          <h1 className='hero__cta-title'>
            <span className='hero__cta-title_regular'>A </span>
            super solution
            <span className='hero__cta-title_regular'> for your </span>
            business.
          </h1>
        </div>
        <p className='hero__cta-text'>
          Our marketing and sales automations help you scale your outreach to
          get more leads for your company.
        </p>
        <button className='request-beta_primary'>Request Beta Access</button>
        <div>
          <img
            src={heroImage}
            className='hero__image'
            alt='landscape image of a mobile phone'
          />
        </div>
      </div>
      <div className='hero__stat-container'>
        <ul className='hero__stats'>
          <li className='hero__stat'>
            <h3 className='hero__stat-number'>2K+</h3>
            <p className='hero__stat-name'>companies</p>
          </li>
          <li className='hero__stat'>
            <h3 className='hero__stat-number'>8</h3>
            <p className='hero__stat-name'>languages</p>
          </li>
          <li className='hero__stat'>
            <h3 className='hero__stat-number'>1.2M</h3>
            <p className='hero__stat-name'>leads</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
