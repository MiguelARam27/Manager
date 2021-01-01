import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../actions/managerActions';
const ProfileEditScreen = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('enter your name');
  const [email, setEmail] = useState('enter your email');
  const [phone, setPhone] = useState('enter your phone number');
  const [store, setStore] = useState('enter your store name');
  const managerProfileUpdate = useSelector(
    (state) => state.managerProfileUpdate
  );
  const { loading, success, error } = managerProfileUpdate;
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateProfile(name, email, phone, store));
  };
  return (
    <div className='profile'>
      {/* <div className='profile__container'> */}
      <form action='' className='profile__container' onSubmit={onSubmitHandler}>
        <h1 className='heading-title'>Edit your profile</h1>
        <div className='profile__container__input-container'>
          <input
            type='email'
            required
            placeholder={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='profile__container__input-container'>
          <input
            type='text'
            required
            placeholder={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='profile__container__input-container'>
          <input
            type='phone'
            required
            placeholder={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className='profile__container__input-container'>
          <input
            type='text'
            required
            placeholder={store}
            onChange={(e) => setStore(e.target.value)}
          />
        </div>
        <button type='submit' onClick={onSubmitHandler}>
          Submit
        </button>
        {/* {error && show && <Message variant={'danger'}>{error}</Message>}
          {success && show && <Message variant={'success'}>Welcome!</Message>} */}
      </form>
      {/* </div> */}
    </div>
  );
};

export default ProfileEditScreen;
