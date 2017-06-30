import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import CoachCard from './CoachCard';
import {selectCoachDetails} from '../../../store/actions/index';


class ClickableCoachCardView extends Component {
    showCoachDetails() {
        this.props.select(this.props.coach);
        Actions.coachDetails();
    }

    render() {
        const {coach} = this.props;
        return (
            <TouchableOpacity onPress={() => this.showCoachDetails()}>
                <CoachCard coach={coach}/>
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        select(coach){
            dispatch(selectCoachDetails(coach));
        }
    };
};

const ClickableCoachCard = connect(
    mapStateToProps, mapDispatchToProps
)(ClickableCoachCardView);

export default ClickableCoachCard;