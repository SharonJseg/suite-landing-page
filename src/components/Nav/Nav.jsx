import React from 'react';
import './Nav.css';
import logo from '../../images/logo.svg';

const Nav = () => {
  return (
    <nav className='nav'>
      <div>
        <img className='logo' src={logo} alt='suite logo' />
      </div>
      <button className='request-beta_secondary'>Request Beta Access</button>
    </nav>
  );
};

export default Nav;
