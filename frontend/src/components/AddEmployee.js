import React from 'react';

const addEmployee = () => {
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
      <button type='submit' onClick={submitHandler}>
        Submit
      </button>
      {/* {error && show && <Message variant={'danger'}>{error}</Message>}
              {success && show && (
                <Message variant={'success'}>Welcome!</Message>
              )} */}
    </form>
  );
};

export default addEmployee;
