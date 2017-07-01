import React, {Component} from 'react';
import {Container, Content, H2, H3, Card, CardItem} from 'native-base';
import {connect} from 'react-redux';
import {HeaderSpacer} from '../common';

import TeamCard from '../team/cards/TeamCard';
import ClickableCoachCard from '../team/cards/ClickableCoachCard';
import PlayersTableRow from '../team/tables/PlayersTableRow';
import PlayersTableHeader from '../team/tables/PlayersTableHeader';

import {byPlayerPosition} from '../../libs/misc';
import {toJs} from '../../db/realm'

class TeamDetailsView extends Component {
    _renderRoster(roster) {
        return roster.map((p, index) => <PlayersTableRow key={index} player={p}/>);
    }

    render() {
        const {team} = this.props.navigation;
        const {coach} = team;
        const roster = toJs(team.roster).sort(byPlayerPosition);
        return (
            <Container>
                <HeaderSpacer/>
                <Content>
                    <TeamCard team={team}/>
                    <ClickableCoachCard coach={coach}/>
                    <Card>
                        <CardItem header>
                            <H3>Roster</H3>
                        </CardItem>
                        <PlayersTableHeader/>
                        {this._renderRoster(roster)}
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
