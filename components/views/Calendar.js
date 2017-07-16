import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {
    Header,
    Button,
    Title,
    Left,
    Card,
    Text,
    Container,
    Content,
    Row,
    Col,
    Icon
} from 'native-base';
import {HeaderSpacer, colors} from '../common';

import {Date} from '../calendar';

import {Fixture} from '../../db';


class CalendarView extends Component {
    state = {
        rounds: []
    };

    componentDidMount() {
        this.setState({rounds: Fixture.getAllRounds()});
    }

    stuff() {

    }

    _renderRounds() {
        return this.state.rounds.map(r => (
            <Date date={r.date} key={r.index} events={r.matches} />
        ));
    }

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
                <HeaderSpacer/>
                <Content style={containerStyle}>
                    <Card style={cardStyle}>
                        <Col>
                            {this._renderRounds()}
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

const Calendar = connect(mapStateToProps, mapDispatchToProps)(CalendarView);
export {Calendar}