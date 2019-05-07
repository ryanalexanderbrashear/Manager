import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from "../actions/types";

const INITIAL_STATE = { 
    email: '', 
    password: '' 
}; 

//Can access email through state.auth.email
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }; //Make a new object, take all of the properties from existing state and put them in this object, define the property of email, and put it on top of existing properties (which will override existing email). We have to create a new object to avoid the issue of comparing the state objects because of Javascript objects being a reference type
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            console.log(action.payload);
        default:
            return state;
    }
};