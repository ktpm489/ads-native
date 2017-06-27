import React, {Component} from 'react';
import {Row, Col} from 'native-base';

import {commonStyles} from './styles';

const {tableRowStyle} = commonStyles;

class Tr extends Component {
    _renderColumns() {
        const {columns} = this.props;
        const count = columns.length;
        return columns.map((c, index) => (
            <Col key={index} size={c.size || Math.round(100 / count)}>
                {c.value}
            </Col>
        ));
    }

    render() {
        return (
            <Row style={tableRowStyle}>
                {this._renderColumns()}
            </Row>
        );
    }
}

export {Tr};