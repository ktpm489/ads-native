import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Scene, Router} from 'react-native-router-flux';
import {NewUserForm} from './components/views';
import {store} from './store';
import {fetchUser} from './store/actions';

class App extends Component {
    componentWillMount() {
        store.dispatch(fetchUser());
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="newUser" component={NewUserForm} title="New Player"/>
                </Router>
            </Provider>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export {App};
