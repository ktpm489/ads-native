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
import {HeaderSpacer, colors} from '../common';

import {wipeDb} from '../../db/realm'

class SettingsView extends Component {

    wipeAll() {
        wipeDb();
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
                            <Row>
                                <Col>
                                    <TouchableOpacity style={appButtonStyle} onPress={() => this.wipeAll()}>
                                        <Icon name="trash" style={appIconStyle}/>
                                        <Text style={appLabelStyle}>Delete Data</Text>
                                    </TouchableOpacity>
                                </Col>
                                <Col />
                                <Col />
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

const Settings = connect(mapStateToProps, mapDispatchToProps)(SettingsView);
export {Settings}