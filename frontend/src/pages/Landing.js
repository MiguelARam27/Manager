import React from 'react';
import SignUp from '../components/SignUp';
import landingImage from '../img/example1.png';
import Login from '../components/Login';
import { useLocation } from 'react-router-dom';
const Landing = () => {
  const path = useLocation();

  return (
    <>
      <div className='landing'>
        <h1 className='landing__title heading-main'>Managy</h1>
        <div className='landing__container'>
          <div className='landing__container__signup'>
            {path && path.pathname === '/' ? <SignUp /> : ''}
            {path && path.pathname === '/login' ? <Login /> : ''}
          </div>
          <div className='landing__container__image'>
            <img src={landingImage} alt='' srcset='' />

            <h2 className='heading-title'>Managing Done Right!</h2>
          </div>
        </div>
      </div>

      <div className='services'>
        <h1 className='heading-main'>Services</h1>
        <div className='services__container'>
          <div className='services__card'>
            <div className='services__card__heading-wrapper'>
              <h2 className='heading-secondary '>Example service</h2>
              <i className='lni lni-calendar'></i>
            </div>

            <p className='heading-paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, quaerat eveniet? Error voluptatem provident minus
              veniam reprehenderit{' '}
            </p>
          </div>
          <div className='services__card'>
            <div className='services__card__heading-wrapper'>
              <h2 className='heading-secondary '> Example service</h2>
              <i className='lni lni-consulting'></i>
            </div>
            <p className='heading-paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, quaerat eveniet? Error voluptatem provident minus
              veniam reprehenderit{' '}
            </p>
          </div>
          <div className='services__card'>
            <div className='services__card__heading-wrapper'>
              <h2 className='heading-secondary '>Example service</h2>
              <i className='lni lni-graph'></i>
            </div>
            <p className='heading-paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, quaerat eveniet? Error voluptatem provident minus
              veniam reprehenderit{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
