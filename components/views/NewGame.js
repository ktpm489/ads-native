import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Card, Title, Container, Content, Text, Button} from 'native-base';
import {HeaderSpacer, B} from '../common';
import TeamsTableHeader from '../team/tables/TeamsTableHeader';
import TeamsTableRow from '../team/tables/TeamsTableRow';

import {wipeDb} from '../../db/realm';

class NewGameView extends Component {
    wipeAll() {
        wipeDb();
    }

    _renderTeams() {
        let {teams} = this.props;
        if (teams.teams && teams.teams.array.length) {
            teams = teams.teams.array;
            return teams.map((t, index) => <TeamsTableRow key={index} team={t}/>)
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
                    <Card>
                        <Text>Ehy there Mr. <B>{`${user.surname}`}</B>, those are the teams that will compete in the
                            next
                            championship.</Text>
                        <TeamsTableHeader/>
                        {this._renderTeams()}
                    </Card>
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