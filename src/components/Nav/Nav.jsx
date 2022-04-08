import React from 'react';
import './Nav.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <div>
        <img className='logo' src={logo} alt='suite logo' />
      </div>
      <Link to='/' className='request-beta_secondary'>
        Request Beta Access
      </Link>
    </nav>
  );
};

export default Nav;
