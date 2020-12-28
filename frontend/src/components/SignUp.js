import React from 'react';

const SignUp = () => {
  return (
    <form className='signup'>
      <h1 className='heading-title'>Sign up</h1>
      <div className='signup__input-container'>
        <input type='email' required placeholder='email' />
      </div>
      <div className='signup__input-container'>
        <input type='password' required placeholder='password' />
      </div>
      <div className='signup__input-container'>
        <input type='password' required placeholder='Confirm password' />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default SignUp;
