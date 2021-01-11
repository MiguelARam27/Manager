import React, { useState, useEffect } from 'react';
import { forgotPassword } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';

const ForgotPasswordScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('Enter your email');
  const [show, setShow] = useState(false);
  const forgot = useSelector((state) => state.forgotPassword);
  const { success, error } = forgot;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  useEffect(() => {
    if (error) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 2000);
    } else if (success) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 2000);
    }
  }, [error, success]);
  return (
    <div className='password'>
      <form className='signup' onSubmit={submitHandler}>
        <h1 className='heading-title'>Forgot password?</h1>
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

        <button onClick={submitHandler}>Submit</button>
        {error && show && <Message variant={'danger'}>{error}</Message>}
        {success && show && (
          <Message variant={'success'}>
            Email Sent! check your inbox and/or spam mail
          </Message>
        )}
      </form>
    </div>
  );
};

export default ForgotPasswordScreen;
