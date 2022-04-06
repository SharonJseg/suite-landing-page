import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <div>
        <img className='logo' src={logo} alt='suite logo' />
      </div>
      <button className='request-beta_secondary'>Request Beta Access</button>
    </header>
  );
};

export default Header;
