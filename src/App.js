import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyDkYG1EQ81juAodMXl82x0GE9T_viESHwo',
            authDomain: 'manager-1127c.firebaseapp.com',
            databaseURL: 'https://manager-1127c.firebaseio.com',
            projectId: 'manager-1127c',
            storageBucket: 'manager-1127c.appspot.com',
            messagingSenderId: '960465752980'
        };
        firebase.initializeApp(config);
    }

    render() {
        //createStore creates a Redux store that holds the complete state tree of our app. 
        //The Provider provides our store so it is available throughout out applications.
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;