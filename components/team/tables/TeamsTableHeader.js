import React, {Component} from 'react';
import {Th} from '../../common';

const columns = [
    {size: 30, value: 'Team'},
    {size: 15, value: 'Nation'},
    {size: 17, value: 'Avg Skill'},
    {size: 17, value: 'Avg Age'},
    {size: 20, value: 'Players'},
];

class TeamsTableHeader extends Component {
    render() {
        return <Th columns={columns}/>;
    }
}

export default TeamsTableHeader;