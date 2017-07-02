import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {
    Header,
    Button,
    Title,
    Left,
    Body,
    Card,
    Text,
    Container,
    Content,
    Row,
    Col,
    Icon
} from 'native-base';
import {Actions} from 'react-native-router-flux';

import {colors} from '../common';

import {SETTINGS, TEAMS_LIST} from '../../const/routes';

class MainDashView extends Component {
    render() {
        const {
            headerStyle,
            containerStyle,
            cardStyle,
            appButtonStyle,
            appIconStyle,
            appLabelStyle,
            internalRowStyle
        } = styles;
        return (
            <Container>
                <Header style={headerStyle} androidStatusBarColor={colors.lightGray}>
                    <Body>
                    <Title style={{color: 'black'}}>
                        Dashboard
                    </Title>
                    </Body>
                </Header>

                <Content style={containerStyle}>
                    <Card style={cardStyle}>
                        <Col>

                            <Row>
                                <Col>
                                    <TouchableOpacity style={appButtonStyle} onPress={() => Actions[TEAMS_LIST]()}>
                                        <Icon name="mail" style={appIconStyle}/>
                                        <Text style={appLabelStyle}>Mail</Text>
                                    </TouchableOpacity>
                                </Col>
                                <Col>
                                    <TouchableOpacity style={appButtonStyle} onPress={() => Actions[TEAMS_LIST]()}>
                                        <Icon name="calendar" style={appIconStyle}/>
                                        <Text style={appLabelStyle}>Calendar</Text>
                                    </TouchableOpacity>
                                </Col>
                                <Col>
                                    <TouchableOpacity style={appButtonStyle} onPress={() => Actions[TEAMS_LIST]()}>
                                        <Icon name="paper" style={appIconStyle}/>
                                        <Text style={appLabelStyle}>News</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>

                            <Row style={internalRowStyle}>
                                <Col>
                                    <TouchableOpacity style={appButtonStyle} onPress={() => Actions[TEAMS_LIST]()}>
                                        <Icon name="people" style={appIconStyle}/>
                                        <Text style={appLabelStyle}>Team</Text>
                                    </TouchableOpacity>
                                </Col>
                                <Col>
                                    <TouchableOpacity style={appButtonStyle} onPress={() => Actions[TEAMS_LIST]()}>
                                        <Icon name="clipboard" style={appIconStyle}/>
                                        <Text style={appLabelStyle}>Club</Text>
                                    </TouchableOpacity>
                                </Col>
                                <Col>
                                    <TouchableOpacity style={appButtonStyle} onPress={() => Actions[TEAMS_LIST]()}>
                                        <Icon name="stats" style={appIconStyle}/>
                                        <Text style={appLabelStyle}>Stats</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>

                            <Row style={internalRowStyle}>
                                <Col/>
                                <Col/>
                                <Col>
                                    <TouchableOpacity style={appButtonStyle} onPress={() => Actions[SETTINGS]()}>
                                        <Icon name="settings" style={appIconStyle}/>
                                        <Text style={appLabelStyle}>Settings</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>

                        </Col>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = {
    headerStyle: {
        backgroundColor: colors.lightGray,
    },
    containerStyle: {
        padding: 5
    },
    cardStyle: {
        padding: 5
    },
    internalRowStyle: {
        marginTop: 75
    },
    appButtonStyle: {
        alignSelf: 'center'
    },
    appLabelStyle: {
        alignSelf: 'center'
    },
    appIconStyle: {
        fontSize: 70
    }
};

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