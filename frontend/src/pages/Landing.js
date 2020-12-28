import React from 'react';
import SignUp from '../components/SignUp';

const Landing = () => {
  return (
    <>
      <div className='landing'>
        <h1 className='landing__title heading-main'>Managy</h1>
        <div className='landing__container'>
          <div className='landing__container__signup'>
            <SignUp></SignUp>
          </div>
          <div className='landing__container__image'>
            <img src='example1.png' alt='' srcset='' />

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
