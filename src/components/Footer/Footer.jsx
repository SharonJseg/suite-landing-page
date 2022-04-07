import React from 'react';
import './Footer.css';

import logo from '../../images/logo.svg';
import Icon from '../Icon/Icon';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <img className='footer__logo' src={logo} alt='footer logo' />
        <p className='footer__copyright'>Copyright - Suite</p>
        <ul className='footer__social-icons'>
          <li>
            <button className='social-icon__button'>
              <Icon
                name='facebook'
                height='20'
                width='20'
                className='social-icon'
              />
            </button>
          </li>

          <li>
            <button className='social-icon__button'>
              <Icon
                name='twitter'
                height='20'
                width='20'
                className='social-icon'
              />
            </button>
          </li>
          <li>
            <button className='social-icon__button'>
              <Icon
                name='instagram'
                height='20'
                width='20'
                className='social-icon'
              />
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
