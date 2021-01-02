import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from '../actions/managerActions';

const EmployeeScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('Enter your email');
  const [password, setPassword] = useState('Enter your password');

  const employeesReducer = useSelector((state) => state.employees);
  const { employees } = employeesReducer;

  const submitHandler = (e) => {
    e.preventDefault();
  };
  console.log(employees);
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);
  return (
    <div className='employee'>
      <div className='employee__container'>
        {/* <h1 className='employee__container__title  heading-title'>
          My employees
        </h1> */}
        <div className='employee__container__flex-grid'>
          <div className='employee__container__flex-grid__employee-input'>
            <h2 className=' heading-title'>add employee</h2>
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
              {/* {error && show && <Message variant={'danger'}>{error}</Message>}
              {success && show && (
                <Message variant={'success'}>Welcome!</Message>
              )} */}
            </form>
          </div>
          <div className='employee__container__flex-grid__employee-list'>
            <h2 className=' heading-title'>my employees</h2>
            {employees &&
              employees.map((employee, key) => {
                return (
                  <>
                    <h2 key={key}>{employee.name}</h2>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeScreen;
