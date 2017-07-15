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

//import {Table} from '../../db';


class StatsView extends Component {
    componentWillMount() {
        //console.log(Table.get());
    }

    stuff() {

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
                                    <TouchableOpacity style={appButtonStyle} onPress={() => this.stuff()}>
                                        <Icon name="trash" style={appIconStyle}/>
                                        <Text style={appLabelStyle}>Stuff</Text>
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

const Stats = connect(mapStateToProps, mapDispatchToProps)(StatsView);
export {Stats}