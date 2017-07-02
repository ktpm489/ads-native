import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Switch, Scene, Router} from 'react-native-router-flux';
import {
    Loading,
    NewPlayerForm,
    MainDash,
    Mail,
    Calendar,
    News,
    Team,
    Club,
    Stats,
    Settings,
    CoachDetails,
    PlayerDetails,
    TeamDetails,
    TeamsList
} from './components/views';
import * as routes from './const/routes';
import {store} from './store';
import {fetchUser} from './store/actions';

class App extends Component {
    componentWillMount() {
        store.dispatch(fetchUser());
    }

    sceneSelector() {
        return store.getState().user ? routes.MAIN_DASH : routes.NEW_PLAYER;
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
                        <Scene key={routes.LOADING} component={Loading} initial hideNavBar/>
                        <Scene key={routes.NEW_PLAYER} component={NewPlayerForm} title="New Player"/>
                        <Scene key={routes.MAIN_DASH} component={MainDash} title="Dashboard"/>
                    </Scene>
                    <Scene key={routes.MAIL} component={Mail} title="Mail"/>
                    <Scene key={routes.CALENDAR} component={Calendar} title="Calendar"/>
                    <Scene key={routes.NEWS} component={News} title="News"/>
                    <Scene key={routes.TEAM} component={Team} title="Team"/>
                    <Scene key={routes.CLUB} component={Club} title="Club"/>
                    <Scene key={routes.STATS} component={Settings} title="Stats"/>
                    <Scene key={routes.SETTINGS} component={Settings} title="Settings"/>
                    <Scene key={routes.TEAMS_LIST} component={TeamsList} title="Teams"/>
                    <Scene key={routes.TEAM_DETAILS} component={TeamDetails} title="Team Details"/>
                    <Scene key={routes.COACH_DETAILS} component={CoachDetails} title="Coach Details"/>
                    <Scene key={routes.PLAYER_DETAILS} component={PlayerDetails} title="Player Details"/>
                </Router>
            </Provider>
        );
    }
}
export {App};
