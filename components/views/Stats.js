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

import {TeamsTableHeader, TeamsTableRow} from '../league/table';

import {Table} from '../../db';


class StatsView extends Component {
    state = {
        table: []
    };

    componentDidMount() {
        this.setState({table: Table.getRows()});
    }

    stuff() {

    }

    render() {
        const {
            containerStyle,
            cardStyle,
            appButtonStyle,
            appIconStyle,
            appLabelStyle,
        } = styles;
        return (
            <Container>
                <HeaderSpacer/>
                <Content style={containerStyle}>
                    <Card style={cardStyle}>
                        <TeamsTableHeader/>
                        {
                            this.state.table.map((team, index) => (
                                <TeamsTableRow
                                    key={index}
                                    index={index + 1}
                                    team={team}
                                />
                            ))
                        }
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