import React, {Component} from 'react';
import {Th} from '../../common';

const columns = [
    {size: 15, value: '#'},
    {size: 40, value: 'Team'},
    {size: 30, value: 'Skill'},
    {size: 15, value: 'Players'},
];

class TeamsTableHeader extends Component {
    render() {
        return <Th columns={columns}/>;
    }
}

export default TeamsTableHeader;