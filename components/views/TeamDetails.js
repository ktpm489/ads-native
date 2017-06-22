import React, {Component} from 'react';
import {Container, Content, Text} from 'native-base';
import {connect} from 'react-redux';
import {HeaderSpacer} from '../common';

import {toJs} from '../../db/realm'

class TeamDetailsView extends Component {
    _renderRoster(roster) {
        return roster.map((p, index) => <Text key={index}>{`${p.name} ${p.surname}`}</Text>);
    }

    render() {
        const {team} = this.props.navigation;
        console.log(toJs(team.roster));
        return (
            <Container>
                <HeaderSpacer/>
                <Content>
                    <Text>{team.name}</Text>
                    {this._renderRoster(toJs(team.roster))}
                </Content>
            </Container>
        );
    }
}


const mapStateToProps = ({navigation}) => {
    return {
        navigation
    }
};

const mapDispatchToProps = dispatch => {
    return {};
};

const TeamDetails = connect(
    mapStateToProps, mapDispatchToProps
)(TeamDetailsView);

export {TeamDetailsView, TeamDetails}
