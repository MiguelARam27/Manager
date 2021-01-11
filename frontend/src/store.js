import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userLoginReducer,
  userRegisterReducer,
  userForgotPasswordReducer,
} from './reducers/userReducers';
import {
  managerUpdateProfileReducer,
  managerProfileDetailsReducer,
  managerEmployeesReducer,
  managerAddEmployeesReducer,
} from './reducers/managerReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  managerProfileUpdate: managerUpdateProfileReducer,
  managerProfileDetails: managerProfileDetailsReducer,
  employees: managerEmployeesReducer,
  addEmployee: managerAddEmployeesReducer,
  forgotPassword: userForgotPasswordReducer,
});
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
const managerProfileDetailsFromStorage = localStorage.getItem('managerDetails')
  ? JSON.parse(localStorage.getItem('managerDetails'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  managerProfileDetails: {
    managerProfileDetails: managerProfileDetailsFromStorage,
  },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
