import React, {Component} from 'react';
import {Container, Content, Text, H2, H3, Card} from 'native-base';
import {connect} from 'react-redux';
import {HeaderSpacer} from '../common';

import TeamCard from '../team/cards/TeamCard';
import CoachCard from '../team/cards/CoachCard';
import PlayersTableRow from '../team/tables/PlayersTableRow';
import PlayersTableHeader from '../team/tables/PlayersTableHeader';

import {toJs} from '../../db/realm'

class TeamDetailsView extends Component {
    _renderRoster(roster) {
        return roster.map((p, index) => <PlayersTableRow key={index} player={p}/>);
    }

    render() {
        const {team} = this.props.navigation;
        const {coach} = team;
        console.log(toJs(team.roster));
        return (
            <Container>
                <HeaderSpacer/>
                <Content>
                    <TeamCard team={team}/>
                    <CoachCard coach={coach}/>
                    <Card>
                        <H3>Roster</H3>
                        <PlayersTableHeader/>
                        {this._renderRoster(toJs(team.roster))}
                    </Card>
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
