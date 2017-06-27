import React, {Component} from 'react';
import {Th} from '../../common';

const columns = [
    {size: 5, value: '#'},
    {size: 45, value: 'Team'},
    {size: 10, value: ''},
    {size: 15, value: 'Skill'},
    {size: 15, value: 'Age'},
    {size: 15, value: 'Players'},
];

class TeamsTableHeader extends Component {
    render() {
        return <Th columns={columns}/>;
    }
}

export default TeamsTableHeader;