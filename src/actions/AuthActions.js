import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from "./types";
import { Actions } from 'react-native-router-flux';

//Action Creators

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password).then(user => loginUserSuccess(dispatch, user)).catch((error) => {
            console.log(error);
            firebase.auth().createUserWithEmailAndPassword(email, password).then(user => loginUserSuccess(dispatch, user)).catch((error) => {
                console.log(error); 
                loginUserFail(dispatch);
            });
        });
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    //Using react-native-router-flux, each scene we create has a function created using the key property. We can navigate to that screen using that function
    Actions.main();
}

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
}