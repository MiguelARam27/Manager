import React, { useState } from 'react';

const RemoveEmployee = ({ employees }) => {
  const [name, setName] = useState('Confirm Employee name to delete');
  const [employee, setEmployee] = useState('select employee to delete');
  const removeHandler = (e) => {
    e.preventDefault();
    if (name !== employee) {
      alert("names don't match please confirm name");
    }
    if (name === employee) {
      alert('names match');
    }
  };

  return (
    <form className='signup' onSubmit={removeHandler}>
      <h1 className='heading-title'>Remove employee</h1>
      <div className='signup__input-container'>
        <select
          name='employees'
          id=''
          onChange={(e) => {
            setEmployee(e.target.value);
          }}
          placeholder={employee}
        >
          <option value={employee}>{employee}</option>
          {employees &&
            employees.map((employee, key) => {
              return (
                <>
                  <option value={employee.name} key={key}>
                    {employee.name}
                  </option>
                </>
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
