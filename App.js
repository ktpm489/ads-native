import React, {Component} from 'react';
import {Container, Content} from 'native-base';
import {Provider, connect} from 'react-redux';
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
                <Container>
                    <Content>
                        <NewUserForm />
                    </Content>
                </Container>
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
