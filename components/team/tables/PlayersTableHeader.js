import React, {Component} from 'react';
import {Th} from '../../common';

const columns = [
    {size: 5, value: '#'},
    {size: 50, value: 'Info'},
    {size: 25, value: 'Position'},
    {size: 20, value: 'Skill'},
];

class PlayersTableHeader extends Component {
    render() {
        return <Th columns={columns}/>;
    }
}

export default PlayersTableHeader;