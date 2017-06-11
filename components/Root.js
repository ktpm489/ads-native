import React, {Component} from 'react';
import {Navigator} from 'react';
import {Container, Content} from 'native-base';
import {NewUserForm} from './views';

class Root extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <NewUserForm/>
                </Content>
            </Container>
        );
    }
}

export {Root};