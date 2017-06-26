import React, {Component} from 'react';
import {Th} from '../../common';

const columns = [
    {size: 10, value: '#'},
    {size: 50, value: 'Info'},
    {size: 20, value: 'Position'},
    {size: 20, value: 'Skill'},
];

class PlayersTableHeader extends Component {
    render() {
        return <Th columns={columns}/>;
    }
}

export default PlayersTableHeader;