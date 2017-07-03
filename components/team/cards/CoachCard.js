import React from 'react';
import {Card, CardItem, Body, Text, Row, Col, H3} from 'native-base';

import {Flag, Stars, commonStyles} from '../../common';

const {tableHeaderTextStyle} = commonStyles;

const CoachCard = ({coach}) => (
    <Card>
        <CardItem header>
            <H3>Coach</H3>
        </CardItem>
        <CardItem>
            <Body>
            <Row>
                <Col>
                    <Text style={{marginLeft: 5}}>{`${coach.name} ${coach.surname} (${coach.age})`}</Text>
                    <Flag nationality={coach.nationality}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Text style={tableHeaderTextStyle}>Skill</Text>
                </Col>
                <Col>
                    <Text style={tableHeaderTextStyle}>Favourite Module</Text>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Stars percentage={coach.skill}/>
                </Col>
                <Col>
                    <Text>{`${coach.module}`}</Text>
                </Col>
            </Row>
            </Body>
        </CardItem>
    </Card>
);
export default CoachCard;