import React from 'react';

const Login = () => {
  return (
    <form className='signup'>
      <h1 className='heading-title'>Login</h1>
      <div className='signup__input-container'>
        <input type='email' required placeholder='email' />
      </div>
      <div className='signup__input-container'>
        <input type='password' required placeholder='password' />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Login;
