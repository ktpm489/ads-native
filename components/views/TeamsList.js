import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Card, Title, Container, Content, Text} from 'native-base';
import {HeaderSpacer, B} from '../common';
import TeamsTableHeader from '../team/tables/TeamsTableHeader';
import TeamsTableRow from '../team/tables/TeamsTableRow';


class TeamsListView extends Component {

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
                    <Card>
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

const TeamsList = connect(mapStateToProps, mapDispatchToProps)(TeamsListView);
export {TeamsList}