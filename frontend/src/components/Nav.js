import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../img/logo2.svg';
import { logOut } from '../actions/userActions';
const Nav = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  //for mobile menu hamburger button
  const clickHandler = () => {
    setActive(!active);
  };
  const logoutHandler = () => {
    dispatch(logOut());
  };
  return (
    <nav className='navbar'>
      <div className='navbar__brand-title'>
        <img src={logo} alt='logo' />
      </div>
      <a className='navbar__togglebutton' onClick={clickHandler}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </a>
      <div className={`navbar__links ${active ? 'active' : ''}`}>
        <ul>
          {userInfo ? (
            <>
              {userInfo.isManager ? (
                <>
                  {' '}
                  <li>
                    <Link to='/managerProfile' className='heading-secondary'>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to='/managerProfile' className='heading-secondary'>
                      Employees
                    </Link>
                  </li>
                  <li>
                    <Link to='/managerProfile' className='heading-secondary'>
                      Schedule
                    </Link>
                  </li>
                  <li>
                    <a className='heading-secondary' onClick={logoutHandler}>
                      LogOut
                    </a>
                  </li>
                </>
              ) : (
                <>
                  {' '}
                  <li>
                    <Link to='/employeeProfile' className='heading-secondary'>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <a className='heading-secondary' onClick={logoutHandler}>
                      LogOut
                    </a>
                  </li>
                </>
              )}
            </>
          ) : (
            <>
              {' '}
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
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
