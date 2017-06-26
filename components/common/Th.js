import React, {Component} from 'react';
import {Text, Row, Col} from 'native-base';

import {commonStyles} from './styles';

const {tableHeaderTextStyle} = commonStyles;

class Th extends Component {
    _renderColumns() {
        const {columns} = this.props;
        const count = columns.length;
        return columns.map((c, index) => (
            <Col key={index} size={c.size || Math.round(100 / count)}>
                <Text style={tableHeaderTextStyle}>{`${c.value}`}</Text>
            </Col>
        ));
    }

    render() {
        return (
            <Row>
                {this._renderColumns()}
            </Row>
        );
    }
}

export {Th};