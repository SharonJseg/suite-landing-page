import React from 'react';
import './Footer.css';

import logo from '../../images/logo.svg';
import fb from '../../images/icon-facebook.svg';
import tw from '../../images/icon-twitter.svg';
import inst from '../../images/icon-instagram.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <img className='footer__logo' src={logo} alt='footer logo' />
        <p className='footer__copyright'>Copyright - Suite</p>
        <ul className='footer__social-icons'>
          <li>
            <button className='social-icon__button'>
              <img src={fb} alt='' className='social-icon' />
            </button>
          </li>

          <li>
            <button className='social-icon__button'>
              <img src={tw} alt='' className='social-icon' />
            </button>
          </li>
          <li>
            <button className='social-icon__button'>
              <img src={inst} alt='' className='social-icon' />
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
