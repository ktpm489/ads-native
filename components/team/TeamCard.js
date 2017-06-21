import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Card, CardItem, Body, Text, Row, Col, H3} from 'native-base';

import {Flag, commonStyles} from '../common';

import {teamHelper} from '../../libs';

const {tableHeaderTextStyle} = commonStyles;

const TeamCard = ({team}) => (
    <TouchableOpacity onPress={() => Actions.teamDetails({team})}>
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
                        <Text style={tableHeaderTextStyle}>Number Of Players</Text>
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

export default TeamCard;