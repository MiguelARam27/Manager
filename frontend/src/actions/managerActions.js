import {
  MANAGER_PROFILE_UPDATE_REQUEST,
  MANAGER_PROFILE_UPDATE_SUCCESS,
  MANAGER_PROFILE_UPDATE_FAIL,
  MANAGER_PROFILE_DETAILS_REQUEST,
  MANAGER_PROFILE_DETAILS_SUCCESS,
  MANAGER_PROFILE_DETAILS_FAIL,
  MANAGER_EMPLOYEES_REQUEST,
  MANAGER_EMPLOYEES_SUCCESS,
  MANAGER_EMPLOYEES_FAIL,
  MANAGER_ADD_EMPLOYEE_REQUEST,
  MANAGER_ADD_EMPLOYEE_SUCCESS,
  MANAGER_ADD_EMPLOYEE_FAIL,
} from '../constants/managerConstants';
import axios from 'axios';

export const updateProfile = (name, email, phone, store) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: MANAGER_PROFILE_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      '/api/manager',
      { name, email, phone, store },
      config
    );

    dispatch({
      type: MANAGER_PROFILE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MANAGER_PROFILE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getManagerDetails = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MANAGER_PROFILE_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get('/api/manager', config);

    localStorage.setItem('managerDetails', JSON.stringify(data));
    dispatch({
      type: MANAGER_PROFILE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MANAGER_PROFILE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getEmployees = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MANAGER_EMPLOYEES_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get('/api/manager/employees', config);

    dispatch({
      type: MANAGER_EMPLOYEES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MANAGER_EMPLOYEES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addEmployee = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MANAGER_ADD_EMPLOYEE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      '/api/manager/employees',
      { email, password },
      config
    );

    dispatch({
      type: MANAGER_ADD_EMPLOYEE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MANAGER_ADD_EMPLOYEE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
