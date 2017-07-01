import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Card, Text, Container, Content, Button, Row, Col} from 'native-base';
import {Actions} from 'react-native-router-flux';

import {HeaderSpacer} from '../common';

import {TEAMS_LIST} from '../../const/routes';

class MainDashView extends Component {
    render() {
        return (
            <Container>
                <HeaderSpacer/>
                <Content>
                    <Col>
                        <Row>
                            <Col>
                                <Button onPress={() => Actions[TEAMS_LIST]()}>
                                    <Text>Stuff</Text>
                                </Button>
                            </Col>
                        </Row>

                    </Col>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = ({user}) => {
    return {
        user
    };
};

const mapDispatchToProps = () => {
    return {};
};

const MainDash = connect(mapStateToProps, mapDispatchToProps)(MainDashView);
export {MainDash}