import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Text} from 'native-base';
import {Flag, Tr, Stars} from '../../common';
import {selectTeamDetails} from '../../../store/actions'

import {teamHelper} from '../../../libs';

class TeamsTableRowView extends Component {
    showTeamDetails() {
        this.props.select(this.props.team);
        Actions.teamDetails();
    }

    render() {
        const {team} = this.props;
        const columns = [
            {
                size: 15,
                value: <Flag nationality={team.nationality}/>
            },
            {
                size: 40,
                value: <Text>{team.name}</Text>
            },
            {
                size: 30,
                value: <Stars percentage={teamHelper.averageSkill(team)}/>
            },
            {
                size: 15,
                value: <Text>{`${team.roster.length}`}</Text>
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

export default TeamsTableRow;