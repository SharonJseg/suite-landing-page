import React from 'react';
import './Header.css';
import curvedline from '../../images/pattern-curved-line-1.svg';
import heroImage from '../../images/image-hero-portrait@2x.webp';
import heroImageSmall from '../../images/image-hero-portrait.webp';
import heroImageMobile from '../../images/image-hero-landscape@2x.webp';
import heroImageMobileSmall from '../../images/image-hero-landscape.webp';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='hero'>
      <div className='hero__wrapper'>
        <section className='hero__main-content'>
          <img className='hero__accent' src={curvedline} alt='' />

          <h1 className='hero__title'>
            <span className='hero__title_regular'>A </span>
            super solution
            <span className='hero__title_regular'> for your </span>
            business.
          </h1>

          <p className='hero__text'>
            Our marketing and sales automations help you scale your outreach to
            get more leads for your company.
          </p>
          <Link to='/' className='hero__button'>
            Request Beta Access
          </Link>
        </section>
        <picture>
          <source srcSet={heroImageSmall} media='(max-width: 960px)' />
          <img
            src={heroImage}
            className='hero__image_portrait'
            alt='landscape image of a mobile phone'
          />
        </picture>
        <picture>
          <source srcSet={heroImageMobileSmall} media='(max-width: 400px)' />
          <img
            src={heroImageMobile}
            className='hero__image_landscape'
            alt='landscape image of a mobile phone'
          />
        </picture>
      </div>
      <section className='stats'>
        <div className='stat__item'>
          <h3 className='stat__number'>2K+</h3>
          <p className='stat__name'>companies</p>
        </div>
        <div className='stat__item'>
          <h3 className='stat__number'>8</h3>
          <p className='stat__name'>languages</p>
        </div>
        <div className='stat__item'>
          <h3 className='stat__number'>1.2M</h3>
          <p className='stat__name'>leads</p>
        </div>
      </section>
    </header>
  );
};

export default Header;
