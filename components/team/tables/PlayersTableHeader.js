import React, {Component} from 'react';
import {Text, Row, Col} from 'native-base';

import {commonStyles} from '../../common';

const {tableHeaderTextStyle} = commonStyles;

class PlayersTableHeader extends Component {
    render() {
        return (
            <Row>
                <Col size={10}>
                    <Text style={tableHeaderTextStyle}>#</Text>
                </Col>
                <Col size={50}>
                    <Text style={tableHeaderTextStyle}>Info</Text>
                </Col>
                <Col size={20}>
                    <Text style={tableHeaderTextStyle}>Position</Text>
                </Col>
                <Col size={20}>
                    <Text style={tableHeaderTextStyle}>Skill</Text>
                </Col>
            </Row>
        );
    }
}

export default PlayersTableHeader;