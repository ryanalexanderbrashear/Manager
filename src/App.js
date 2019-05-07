import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
        //First argument: reducers, second argument: default data to pass to the store, third argument: store enhancers (in this case, redux thunk)
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

        //The Provider provides our store so it is available throughout out applications.
        return (
            <Provider store={store}>
                <SafeAreaView>
                    <LoginForm />
                </SafeAreaView>
            </Provider>
        );
    }
}

export default App;