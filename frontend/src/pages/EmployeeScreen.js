import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from '../actions/managerActions';
import SignUp from '../components/SignUp';

const EmployeeScreen = () => {
  const dispatch = useDispatch();

  const employeesReducer = useSelector((state) => state.employees);
  const { employees } = employeesReducer;

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);
  return (
    <div className='employee'>
      <div className='employee__container'>
        <div className='employee__container__flex-grid'>
          <div className='employee__container__flex-grid__employee-list'>
            <h2 className=' heading-title'>my employees</h2>
            <table className='employee-table'>
              <thead className='employee-table__head'>
                <tr>
                  <th>Name</th>
                  <th>phone </th>
                  <th>email </th>
                  <th>Mon</th>
                  <th>Tues</th>
                  <th>Wed</th>
                  <th>Thurs</th>
                  <th>Fri</th>
                  <th>Sat</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody className='employee-table__body'>
                {employees &&
                  employees.map((employee, key) => {
                    return (
                      <>
                        <tr key={key}>
                          <td>{employee.name}</td>
                          <td>{employee.phone}</td>
                          <td>{employee.email}</td>
                          <td>
                            {employee.schedule.monday.startTime} -{' '}
                            {employee.schedule.monday.endTime}
                          </td>
                          <td>
                            {employee.schedule.tuesday.startTime} -{' '}
                            {employee.schedule.tuesday.endTime}
                          </td>
                          <td>
                            {employee.schedule.wednesday.startTime} -{' '}
                            {employee.schedule.wednesday.endTime}
                          </td>
                          <td>
                            {employee.schedule.thursday.startTime} -{' '}
                            {employee.schedule.thursday.endTime}
                          </td>
                          <td>
                            {employee.schedule.friday.startTime} -{' '}
                            {employee.schedule.friday.endTime}
                          </td>
                          <td>
                            {employee.schedule.saturday.startTime} -{' '}
                            {employee.schedule.saturday.endTime}
                          </td>
                          <td>
                            {employee.schedule.sunday.startTime} -{' '}
                            {employee.schedule.sunday.endTime}
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className='employee__container__flex-grid__employee-input'>
            <SignUp title={'Add Employee'} employeeSignUp={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeScreen;
