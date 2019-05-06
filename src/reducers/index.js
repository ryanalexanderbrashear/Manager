//We will wire all of our reducers together here
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
    auth: AuthReducer //Auth is the piece of state that results from the AuthReducer
});