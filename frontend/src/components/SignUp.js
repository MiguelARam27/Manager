import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from './Message';
import { register } from '../actions/userActions';

const SignUp = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('Enter your email');
  const [password, setPassword] = useState('Enter your password');
  const [confirmPassword, setConfirmPassword] = useState(
    'Confirm your password'
  );
  const [show, setShow] = useState(false);

  const userRegister = useSelector((state) => state.userRegister);
  const { error, success } = userRegister;

  const registerHandler = (e) => {
    e.preventDefault();
    dispatch(register(email, password));
  };

  const clearMessage = () => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };
  useEffect(() => {
    if (error) {
      setShow(true);
      clearMessage();
    }
    if (success) {
      setShow(true);
      clearMessage();
    }
  }, [error, success]);

  return (
    <form className='signup' onSubmit={registerHandler}>
      <h1 className='heading-title'>Sign up</h1>
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
      <div className='signup__input-container'>
        <input
          type='password'
          required
          placeholder={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
      </div>
      <button onClick={registerHandler}>Submit</button>
      {error && show && <Message variant={'danger'}>{error}</Message>}
      {success && show && <Message variant={'success'}>Welcome!</Message>}
    </form>
  );
};

export default SignUp;
