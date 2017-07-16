import React from 'react';
import {Card, CardItem, Text, Body} from 'native-base';
import {EventList} from './EventList';
const Date = ({date, events, collapsed}) => (
    <Card>
        <CardItem header>
            <Text>{date}</Text>
        </CardItem>
        <CardItem>
            <Body>
            { collapsed &&
            <EventList events={events}/>
            }
            </Body>
        </CardItem>
    </Card>
);

export {Date};