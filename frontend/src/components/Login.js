import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/userActions';
import { useSelector } from 'react-redux';
import Message from './Message';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('Enter your email');
  const [password, setPassword] = useState('Enter your password');
  const [show, setShow] = useState(false);

  console.log(history);
  const userLogin = useSelector((state) => state.userLogin);
  const { error, success, userInfo } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  const clearMessage = () => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };
  useEffect(() => {
    if (userInfo) {
      history.push('/profile');
    } else {
      if (error) {
        setShow(true);
        clearMessage();
      }
      if (success) {
        setShow(true);
        clearMessage();
      }
    }
  }, [error, success, history]);
  return (
    <form className='signup' onSubmit={submitHandler}>
      <h1 className='heading-title'>Login</h1>
      <div className='signup__input-container'>
        <input
          type='email'
          required
          placeholder={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className='signup__input-container'>
        <input
          type='password'
          required
          placeholder={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button type='submit' onClick={submitHandler}>
        Submit
      </button>
      {error && show && <Message variant={'danger'}>{error}</Message>}
      {success && show && <Message variant={'success'}>Welcome!</Message>}
    </form>
  );
};

export default Login;
