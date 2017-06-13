import React, {Component} from 'react';
import {Navigator} from 'react';
import {Container, Content} from 'native-base';
import {NewPlayerForm} from './views';

class Root extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <NewPlayerForm/>
                </Content>
            </Container>
        );
    }
}

export {Root};