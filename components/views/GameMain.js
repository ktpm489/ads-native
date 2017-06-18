import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Body, Title, Container, Content, Text, Button} from 'native-base';

import {User} from '../../db/dto';
import {generator} from '../../libs';

class GameMainView extends Component {
    state = {
        teams: []
    };

    wipeAll() {
        User.delete();
    }

    generateTeams() {
        const teams = generator.teams();
        console.log(teams);
        this.setState({teams});
    }

    _renderTeams() {
        if (this.state.teams.length) {
            return <Text>{`There are ${this.state.teams.length} teams`}</Text>
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
                    <Button onPress={this.generateTeams.bind(this)}>
                        <Text>Generate Teams</Text>
                    </Button>
                    {this._renderTeams()}
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = ({user}) => {
    return {
        user
    };
};

const mapDispatchToProps = () => {
    return {};
};

const GameMain = connect(mapStateToProps, mapDispatchToProps)(GameMainView);
export {GameMain}