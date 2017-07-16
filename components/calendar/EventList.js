import React, {Component} from 'react';
import {Card, Row, Text} from 'native-base';

class EventList extends Component {
    render() {
        const {events} = this.props;
        return (
            <Card>
                {
                    events.map((e, index) => (
                        <Row key={index}>
                            <Text>{`${e.home} - ${e.away}`}</Text>
                        </Row>
                    ))
                }
            </Card>
        );
    }
}

export {EventList};