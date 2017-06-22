import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Card, CardItem, Body, Text, Row, Col, H3} from 'native-base';

import {Flag, commonStyles} from '../common';
import {teamHelper} from '../../libs';
import {selectTeamDetails} from '../../store/actions';

const {tableHeaderTextStyle} = commonStyles;

class TeamCardView extends Component {
    showTeamDetails() {
        this.props.select(this.props.team);
        Actions.teamDetails();
    }

    render() {
        const {team} = this.props;
        return (
            <TouchableOpacity onPress={() => this.showTeamDetails()}>
                <Card>
                    <CardItem header>
                        <Flag nationality={team.nationality}/>
                        <H3 style={{marginLeft: 5}}>{team.name}</H3>
                    </CardItem>
                    <CardItem>
                        <Body>
                        <Row>
                            <Col>
                                <Text style={tableHeaderTextStyle}>Average Skill</Text>
                            </Col>
                            <Col>
                                <Text style={tableHeaderTextStyle}>Average Age</Text>
                            </Col>
                            <Col>
                                <Text style={tableHeaderTextStyle}>#Players</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text>{teamHelper.averageSkill(team)}</Text>
                            </Col>
                            <Col>
                                <Text>{teamHelper.averageAge(team)}</Text>
                            </Col>
                            <Col>
                                <Text>{`${team.roster.length}`}</Text>
                            </Col>
                        </Row>
                        </Body>
                    </CardItem>
                </Card>
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

const TeamCard = connect(
    mapStateToProps, mapDispatchToProps
)(TeamCardView);

export default TeamCard;