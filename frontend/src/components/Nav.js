import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo2.svg';
const Nav = () => {
  const [active, setActive] = useState(false);

  //for mobile menu hamburger button
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
            <Link to='/' className='heading-secondary'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/login' className='heading-secondary'>
              Sign in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
