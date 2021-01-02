import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, getManagerDetails } from '../actions/managerActions';
import Message from '../components/Message';
import Loading from '../components/Loading';
import { MANAGER_PROFILE_UPDATE_RESET } from '../constants/managerConstants';
const ManagerProfileEditScreen = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('enter your name');
  const [email, setEmail] = useState('enter your email');
  const [phone, setPhone] = useState('enter your phone number');
  const [store, setStore] = useState('enter your store name');

  const [showMessage, setShowMessage] = useState(false);

  //manager update profile details from state
  const managerProfileUpdate = useSelector(
    (state) => state.managerProfileUpdate
  );
  const { loading, success, error } = managerProfileUpdate;

  //manager details from state
  const manager = useSelector((state) => state.managerProfileDetails);
  const { managerProfileDetails } = manager;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateProfile(name, email, phone, store));
  };
  const clearMessage = () => {
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  useEffect(() => {
    if (success) {
      setShowMessage(true);
      dispatch(getManagerDetails());
      dispatch({
        type: MANAGER_PROFILE_UPDATE_RESET,
      });

      clearMessage();
    }

    if (!managerProfileDetails || !managerProfileDetails.name) {
      dispatch(getManagerDetails());
    } else {
      setName(managerProfileDetails.name);
      setEmail(managerProfileDetails.email);
      setPhone(managerProfileDetails.phone);
      setStore(managerProfileDetails.store);
    }
  }, [dispatch, success, managerProfileDetails]);
  return (
    <div className='profile'>
      <form action='' className='profile__container' onSubmit={onSubmitHandler}>
        {loading ? (
          <Loading></Loading>
        ) : (
          <>
            <h1 className='heading-title'>Edit your profile</h1>
            <div className='profile__container__input-container'>
              <input
                type='email'
                required
                placeholder={name}
                value={name}
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
            {error && showMessage && (
              <Message variant={'danger'}>{error}</Message>
            )}
            {success && showMessage && (
              <Message variant={'success'}>profile updated</Message>
            )}
          </>
        )}
      </form>
    </div>
  );
};

export default ManagerProfileEditScreen;
