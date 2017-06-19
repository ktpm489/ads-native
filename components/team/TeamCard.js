import React from 'react';
import {Card, CardItem, Body, Text} from 'native-base';

import {Flag} from '../common';

import {teamHelper} from '../../libs';

const TeamCard = ({team}) => (
    <Card>
        <CardItem header>
            <Flag nationality={team.nationality}/>
            <Text style={{marginLeft: 5}}>{team.name}</Text>
        </CardItem>
        <CardItem>
            <Body>
            <Text>{teamHelper.averageSkill(team)}</Text>
            <Text>{teamHelper.averageAge(team)}</Text>
            </Body>
        </CardItem>
    </Card>
);

export default TeamCard;