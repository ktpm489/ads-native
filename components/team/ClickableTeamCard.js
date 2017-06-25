import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import TeamCard from './cards/TeamCard';
import {selectTeamDetails} from '../../store/actions';


class TeamCardView extends Component {
    showTeamDetails() {
        this.props.select(this.props.team);
        Actions.teamDetails();
    }

    render() {
        const {team} = this.props;
        return (
            <TouchableOpacity onPress={() => this.showTeamDetails()}>
                <TeamCard team={team}/>
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

const ClickableTeamCard = connect(
    mapStateToProps, mapDispatchToProps
)(TeamCardView);

export default ClickableTeamCard;