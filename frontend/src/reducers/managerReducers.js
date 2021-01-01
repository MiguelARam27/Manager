import {
  MANAGER_PROFILE_UPDATE_REQUEST,
  MANAGER_PROFILE_UPDATE_SUCCESS,
  MANAGER_PROFILE_UPDATE_FAIL,
  MANAGER_PROFILE_UPDATE_RESET,
} from '../constants/managerConstants';

export const managerUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case MANAGER_PROFILE_UPDATE_REQUEST:
      return { loading: true };
    case MANAGER_PROFILE_UPDATE_SUCCESS:
      return { loading: false, profileInfo: action.payload, success: false };
    case MANAGER_PROFILE_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    case MANAGER_PROFILE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
