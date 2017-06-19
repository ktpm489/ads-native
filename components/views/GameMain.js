import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Body, Title, Container, Content, Text, Button} from 'native-base';

import TeamCard from '../team/TeamCard';

import {wipeDb} from '../../db/realm';

class GameMainView extends Component {
    state = {
        teams: []
    };

    wipeAll() {
        wipeDb();
    }

    _renderTeams() {
        const {league} = this.props;
        if (league.teams && league.teams.array.length) {
            return league.teams.array.map((t,index) => <TeamCard key={index} team={t}/>)
        }
        return <Text/>
    }

    render() {
        const {user} = this.props;
        return (
            <Container>
                <Header>
                    <Body>
                    <Title>
                        {`${user.name} ${user.surname}`}
                    </Title>
                    </Body>
                </Header>
                <Content>
                    <Button onPress={this.wipeAll.bind(this)}>
                        <Text>Wipe</Text>
                    </Button>
                    <Text>Main</Text>
                    {this._renderTeams()}
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = ({user, league}) => {
    return {
        user,
        league
    };
};

const mapDispatchToProps = () => {
    return {};
};

const GameMain = connect(mapStateToProps, mapDispatchToProps)(GameMainView);
export {GameMain}