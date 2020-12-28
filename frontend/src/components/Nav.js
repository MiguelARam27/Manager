import React, { useState } from 'react';
import logo from '../img/logo2.svg';
const Nav = () => {
  const [active, setActive] = useState(false);

  //for mobile menu
  const clickHandler = () => {
    setActive(!active);
  };

  return (
    <nav className='navbar'>
      <div className='navbar__brand-title'>
        <img src={logo} alt='logo' />
      </div>
      <a href='#' className='navbar__togglebutton' onClick={clickHandler}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </a>
      <div className={`navbar__links ${active ? 'active' : ''}`}>
        <ul>
          <li>
            <a href='#' className='heading-secondary'>
              Home
            </a>
          </li>
          <li>
            <a href='#' className='heading-secondary'>
              Home
            </a>
          </li>
          <li>
            <a href='#' className='heading-secondary'>
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
