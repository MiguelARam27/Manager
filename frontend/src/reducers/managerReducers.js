import {
  MANAGER_PROFILE_UPDATE_REQUEST,
  MANAGER_PROFILE_UPDATE_SUCCESS,
  MANAGER_PROFILE_UPDATE_FAIL,
  MANAGER_PROFILE_UPDATE_RESET,
  MANAGER_PROFILE_DETAILS_REQUEST,
  MANAGER_PROFILE_DETAILS_SUCCESS,
  MANAGER_PROFILE_DETAILS_FAIL,
  MANAGER_PROFILE_DETAILS_RESET,
  MANAGER_EMPLOYEES_REQUEST,
  MANAGER_EMPLOYEES_SUCCESS,
  MANAGER_EMPLOYEES_FAIL,
  MANAGER_EMPLOYEES_RESET,
  MANAGER_ADD_EMPLOYEE_REQUEST,
  MANAGER_ADD_EMPLOYEE_SUCCESS,
  MANAGER_ADD_EMPLOYEE_FAIL,
  MANAGER_ADD_EMPLOYEE_RESET,
  MANAGER_REMOVE_EMPLOYEE_REQUEST,
  MANAGER_REMOVE_EMPLOYEE_SUCCESS,
  MANAGER_REMOVE_EMPLOYEE_FAIL,
  MANAGER_REMOVE_EMPLOYEE_RESET,
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
export const managerEmployeesReducer = (state = {}, action) => {
  switch (action.type) {
    case MANAGER_EMPLOYEES_REQUEST:
      return { ...state, loading: true, success: false };
    case MANAGER_EMPLOYEES_SUCCESS:
      return {
        loading: false,
        employees: action.payload,
        success: true,
      };
    case MANAGER_EMPLOYEES_FAIL:
      return { loading: false, error: action.payload, success: false };
    case MANAGER_EMPLOYEES_RESET:
      return {};
    default:
      return state;
  }
};
export const managerAddEmployeesReducer = (
  state = {
    loading: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    case MANAGER_ADD_EMPLOYEE_REQUEST:
      return { loading: true };
    case MANAGER_ADD_EMPLOYEE_SUCCESS:
      return {
        loading: false,
        addEmployee: action.payload,
        success: true,
      };
    case MANAGER_ADD_EMPLOYEE_FAIL:
      return { loading: false, error: action.payload, success: false };
    case MANAGER_ADD_EMPLOYEE_RESET:
      return {};
    default:
      return state;
  }
};
export const managerRemoveEmployeesReducer = (
  state = {
    loading: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    case MANAGER_REMOVE_EMPLOYEE_REQUEST:
      return { loading: true };
    case MANAGER_REMOVE_EMPLOYEE_SUCCESS:
      return {
        loading: false,
        removeEmployee: action.payload,
        success: true,
      };
    case MANAGER_REMOVE_EMPLOYEE_FAIL:
      return { loading: false, error: action.payload, success: false };
    case MANAGER_REMOVE_EMPLOYEE_RESET:
      return {};
    default:
      return state;
  }
};
