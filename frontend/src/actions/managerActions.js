import {
  MANAGER_PROFILE_UPDATE_REQUEST,
  MANAGER_PROFILE_UPDATE_SUCCESS,
  MANAGER_PROFILE_UPDATE_FAIL,
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
