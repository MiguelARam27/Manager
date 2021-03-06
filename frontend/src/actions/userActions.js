import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_RESET,
  USER_FORGOT_PASSWORD_RESET,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_FAIL,
  USER_FORGOT_PASSWORD_SUCCESS,
} from '../constants/userConstants';

import { getManagerDetails } from '../actions/managerActions';
import {
  MANAGER_PROFILE_DETAILS_RESET,
  MANAGER_ADD_EMPLOYEE_RESET,
} from '../constants/managerConstants';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    );

    localStorage.setItem('userInfo', JSON.stringify(data));
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    if (data.isManager) {
      dispatch(getManagerDetails());
    }
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/users',
      { email, password },
      config
    );
    localStorage.setItem('userInfo', JSON.stringify(data));
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({
      type: USER_FORGOT_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/forgotpassword',
      { email },
      config
    );
    dispatch({
      type: USER_FORGOT_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_FORGOT_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logOut = () => async (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('managerDetails');
  dispatch({
    type: USER_LOGOUT,
  });
  dispatch({
    type: USER_REGISTER_RESET,
  });
  dispatch({
    type: MANAGER_PROFILE_DETAILS_RESET,
  });
  dispatch({
    type: USER_FORGOT_PASSWORD_RESET,
  });
  dispatch({
    type: MANAGER_ADD_EMPLOYEE_RESET,
  });
  window.location.href = '/login';
};
