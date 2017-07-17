import React, {Component} from 'react';
import {Card, Row, Text} from 'native-base';

import {MatchRecap} from '../league/match';
import {commonStyles} from '../common';

class EventList extends Component {
    _renderEvent(event) {
        if (isMatch(event)) {
            return <MatchRecap match={event}/>
        }

        return <Text>{`${event.body}`}</Text>
    }

    render() {
        const {events} = this.props;
        return (
            <Card style={{flex: 1}}>
                {
                    events.map((e, index) => (
                        <Row key={index} style={commonStyles.tableRowStyle}>
                            {this._renderEvent(e)}
                        </Row>
                    ))
                }
            </Card>
        );
    }
}

const isMatch = eventObject => {
    return eventObject.home !== undefined;
};

export {EventList};