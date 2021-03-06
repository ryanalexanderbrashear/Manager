//We will wire all of our reducers together here
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
    auth: AuthReducer, //Auth is the piece of state that results from the AuthReducer
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer
});