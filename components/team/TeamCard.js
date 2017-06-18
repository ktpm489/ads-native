import React from 'react';
import {Card, CardItem, Body, H2} from 'native-base';
const TeamCard = ({team}) => (
    <Card>
        <H2>{team.name}</H2>
    </Card>
);

export default TeamCard;