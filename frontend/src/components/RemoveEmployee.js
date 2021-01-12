import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeEmployee } from '../actions/managerActions';

const RemoveEmployee = ({ employees }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('Confirm Employee name to delete');
  const [employee, setEmployee] = useState('');
  const removeHandler = (e) => {
    e.preventDefault();
    if (name !== employee) {
      alert("names don't match please confirm name");
      console.log(name);
      console.log(employee);
    } else if (name === employee) {
      alert('names match');
      console.log(employee);
      let copy = [...employees];
      let id = copy.filter((x) => x.name === employee)[0].user;
      //   console.log([...employees].find({ name: employee }));
      dispatch(removeEmployee(id));
    }
  };

  return (
    <form className='signup' onSubmit={removeHandler}>
      <h1 className='heading-title'>Remove employee</h1>
      <div className='signup__input-container'>
        <select
          onChange={(e) => {
            setEmployee(e.target.value);
          }}
          className='form-select'
        >
          <option name={'na'}>Choose employee to delete</option>
          {employees &&
            employees.map((employee) => {
              return (
                <option value={employee.name} key={employee.user}>
                  {employee.name}
                </option>
              );
            })}
        </select>
      </div>
      <div className='signup__input-container'>
        <input
          type='text'
          required
          placeholder={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <button onClick={removeHandler}>Remove Employee</button>
    </form>
  );
};

export default RemoveEmployee;
