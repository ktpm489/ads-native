import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Switch, Scene, Router} from 'react-native-router-flux';
import {Loading, NewPlayerForm, NewGame} from './components/views';
import {store} from './store';
import {fetchUser} from './store/actions';

class App extends Component {
    componentWillMount() {
        store.dispatch(fetchUser());
    }

    sceneSelector() {
        return store.getState().user ? 'newGame' : 'newPlayer';
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene
                        key="root"
                        component={Switch}
                        tabs
                        unmountScenes
                        selector={this.sceneSelector.bind(this)}
                    >
                        <Scene key="loading" component={Loading} initial hideNavBar/>
                        <Scene key="newPlayer" component={NewPlayerForm} title="New Player"/>
                        <Scene key="newGame" component={NewGame} title="Dashboard" hideNavBar/>
                    </Scene>
                </Router>
            </Provider>
        );
    }
}
export {App};
