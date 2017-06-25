import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Body, Title, Container, Content, Text, Button} from 'native-base';
import {HeaderSpacer} from '../common';
import TeamCard from '../team/ClickableTeamCard';

import {wipeDb} from '../../db/realm';

class NewGameView extends Component {
    wipeAll() {
        wipeDb();
    }

    _renderTeams() {
        let {teams} = this.props;
        if (teams.teams && teams.teams.array.length) {
            teams = teams.teams.array;
            return teams.map((t, index) => <TeamCard key={index} team={t}/>)
        }
        return <Text/>
    }

    render() {
        const {user} = this.props;
        return (
            <Container>
                <HeaderSpacer />
                <Content>
                    <Button onPress={this.wipeAll.bind(this)}>
                        <Text>Wipe</Text>
                    </Button>
                    <Title>
                        {`${user.name} ${user.surname}`}
                    </Title>
                    <Text>Main</Text>
                    {this._renderTeams()}
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = ({user, teams}) => {
    return {
        user,
        teams
    };
};

const mapDispatchToProps = () => {
    return {};
};

const NewGame = connect(mapStateToProps, mapDispatchToProps)(NewGameView);
export {NewGame}