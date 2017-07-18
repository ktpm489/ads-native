import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Text} from 'native-base';
import {Tr} from '../../common';
import {selectTeamDetails} from '../../../store/actions'

class TeamsTableRowView extends Component {
    showTeamDetails() {
        return;
        this.props.select(this.props.team);
        Actions.teamDetails();
    }

    render() {
        const {team, index} = this.props;
        const columns = [
            {
                size: 7,
                value: <Text>{`${index}`}</Text>
            },
            {
                size: 44,
                value: <Text>{team.name}</Text>
            },
            {
                size: 7,
                value: <Text>{team.played}</Text>
            },
            {
                size: 7,
                value: <Text>{team.won}</Text>
            },
            {
                size: 7,
                value: <Text>{team.lost}</Text>
            },
            {
                size: 7,
                value: <Text>{team.draw}</Text>
            },
            {
                size: 7,
                value: <Text>{team.goalsScored}</Text>
            },
            {
                size: 7,
                value: <Text>{team.goalsConceded}</Text>
            },
            {
                size: 7,
                value: <Text>{team.points}</Text>
            },

        ];
        return (
            <TouchableOpacity onPress={() => this.showTeamDetails()}>
                <Tr columns={columns}/>
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        select(team){
            dispatch(selectTeamDetails(team));
        }
    };
};

const TeamsTableRow = connect(
    mapStateToProps, mapDispatchToProps
)(TeamsTableRowView);

export {TeamsTableRow};