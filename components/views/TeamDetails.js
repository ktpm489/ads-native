import React, {Component} from 'react';
import {Container, Content, Text} from 'native-base';
import {connect} from 'react-redux';
import {HeaderSpacer} from '../common';

import PlayersTableRow from '../team/tables/PlayersTableRow';
import PlayersTableHeader from '../team/tables/PlayersTableHeader';

import {toJs} from '../../db/realm'

class TeamDetailsView extends Component {
    _renderRoster(roster) {
        return roster.map((p, index) => <PlayersTableRow key={index} player={p}/>);
    }

    render() {
        const {team} = this.props.navigation;
        console.log(toJs(team.roster));
        return (
            <Container>
                <HeaderSpacer/>
                <Content>
                    <Text>{team.name}</Text>
                    <PlayersTableHeader/>
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
