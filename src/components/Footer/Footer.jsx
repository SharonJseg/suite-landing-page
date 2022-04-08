import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to='/' className='social-icon__button'>
              <Icon
                name='facebook'
                height='20'
                width='20'
                className='social-icon'
              />
            </Link>
          </li>

          <li>
            <Link to='/' className='social-icon__button'>
              <Icon
                name='twitter'
                height='20'
                width='20'
                className='social-icon'
              />
            </Link>
          </li>
          <li>
            <Link to='/' className='social-icon__button'>
              <Icon
                name='instagram'
                height='20'
                width='20'
                className='social-icon'
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
