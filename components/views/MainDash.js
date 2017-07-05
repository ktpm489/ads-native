import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {
    Header,
    H3,
    Button,
    Title,
    Left,
    Body,
    Card,
    CardItem,
    Text,
    Container,
    Content,
    Row,
    Col,
    Icon
} from 'native-base';
import {Actions} from 'react-native-router-flux';

import {colors} from '../common';
import {ImportantNews, Date} from '../dash';

import {DATE_FORMAT} from '../../const';
import {SETTINGS, MAIL, CALENDAR, NEWS, TEAM, CLUB, STATS, TEAMS_LIST} from '../../const/routes';

import {advanceTime} from '../../store/actions';

class MainDashView extends Component {
    advanceTime() {
        const {advanceTime, game} = this.props;
        advanceTime(game);
    }

    render() {
        const {
            headerStyle,
            containerStyle,
            cardStyle,
            appButtonStyle,
            actionButtonStyle,
            appIconStyle,
            appLabelStyle,
            internalRowStyle,
            bottomBar
        } = styles;
        const {importantMessages, status} = this.props.game;
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
                                    <TouchableOpacity style={appButtonStyle} onPress={() => Actions[MAIL]()}>
                                        <Icon name="mail" style={appIconStyle}/>
                                        <Text style={appLabelStyle}>Mail</Text>
                                    </TouchableOpacity>
                                </Col>
                                <Col>
                                    <TouchableOpacity style={appButtonStyle} onPress={() => Actions[CALENDAR]()}>
                                        <Icon name="calendar" style={appIconStyle}/>
                                        <Text style={appLabelStyle}>Calendar</Text>
                                    </TouchableOpacity>
                                </Col>
                                <Col>
                                    <TouchableOpacity style={appButtonStyle} onPress={() => Actions[NEWS]()}>
                                        <Icon name="paper" style={appIconStyle}/>
                                        <Text style={appLabelStyle}>News</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>

                            <Row style={internalRowStyle}>
                                <Col>
                                    <TouchableOpacity style={appButtonStyle} onPress={() => Actions[TEAM]()}>
                                        <Icon name="people" style={appIconStyle}/>
                                        <Text style={appLabelStyle}>Team</Text>
                                    </TouchableOpacity>
                                </Col>
                                <Col>
                                    <TouchableOpacity style={appButtonStyle} onPress={() => Actions[CLUB]()}>
                                        <Icon name="clipboard" style={appIconStyle}/>
                                        <Text style={appLabelStyle}>Club</Text>
                                    </TouchableOpacity>
                                </Col>
                                <Col>
                                    <TouchableOpacity style={appButtonStyle} onPress={() => Actions[STATS]()}>
                                        <Icon name="stats" style={appIconStyle}/>
                                        <Text style={appLabelStyle}>Stats</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>

                            <Row style={internalRowStyle}>
                                <Col>
                                    <TouchableOpacity style={appButtonStyle} onPress={() => Actions[TEAMS_LIST]()}>
                                        <Icon name="globe" style={appIconStyle}/>
                                        <Text style={appLabelStyle}>World Db</Text>
                                    </TouchableOpacity>
                                </Col>
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
                    <ImportantNews news={importantMessages}/>
                </Content>
                <Row style={bottomBar}>
                    <Col>
                        <Date date={status.date.format(DATE_FORMAT)}/>
                    </Col>
                    <Col/>
                    <Col>
                        <Button style={actionButtonStyle} onPress={() => this.advanceTime()}>
                            <Text>Continue</Text>
                            <Icon name="skip-forward" style={{fontSize: 15}}/>
                        </Button>
                    </Col>
                </Row>
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
        marginBottom: 20,
        padding: 5
    },
    internalRowStyle: {
        marginTop: 40
    },
    appButtonStyle: {
        alignSelf: 'center'
    },
    actionButtonStyle: {
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 5
    },
    appLabelStyle: {
        alignSelf: 'center'
    },
    appIconStyle: {
        fontSize: 70
    },
    bottomBar: {
        backgroundColor: colors.lightGray,
        borderTopWidth: 1,
        borderColor: colors.softBorderColor,
        padding: 8,
        position: 'absolute',
        bottom: 0,
    }
};

const mapStateToProps = ({user, game}) => {
    return {
        user,
        game
    };
};

const mapDispatchToProps = dispatch => {
    return {
        advanceTime(game) {
            dispatch(advanceTime(game));
        }
    };
};

const MainDash = connect(mapStateToProps, mapDispatchToProps)(MainDashView);
export {MainDash}