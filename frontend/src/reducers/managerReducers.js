import {
  MANAGER_PROFILE_UPDATE_REQUEST,
  MANAGER_PROFILE_UPDATE_SUCCESS,
  MANAGER_PROFILE_UPDATE_FAIL,
  MANAGER_PROFILE_UPDATE_RESET,
  MANAGER_PROFILE_DETAILS_REQUEST,
  MANAGER_PROFILE_DETAILS_SUCCESS,
  MANAGER_PROFILE_DETAILS_FAIL,
  MANAGER_PROFILE_DETAILS_RESET,
} from '../constants/managerConstants';

export const managerUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case MANAGER_PROFILE_UPDATE_REQUEST:
      return { loading: true };
    case MANAGER_PROFILE_UPDATE_SUCCESS:
      return { loading: false, profileInfo: action.payload, success: true };
    case MANAGER_PROFILE_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    case MANAGER_PROFILE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const managerProfileDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case MANAGER_PROFILE_DETAILS_REQUEST:
      return { ...state, loading: true, success: false };
    case MANAGER_PROFILE_DETAILS_SUCCESS:
      return {
        loading: false,
        managerProfileDetails: action.payload,
        success: true,
      };
    case MANAGER_PROFILE_DETAILS_FAIL:
      return { loading: false, error: action.payload, success: false };
    case MANAGER_PROFILE_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};