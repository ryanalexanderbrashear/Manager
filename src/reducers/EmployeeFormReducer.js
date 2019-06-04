import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            // Return current state, along with replacing the state for whatever prop was passed in for the employee update action (I.E, name, phone, shift)
            //The braces refer to key interpolation, which means the key will be calculated at runtime
            return { ...state, [action.payload.prop]: action.payload.value }
        default:
            return state;
    }
};