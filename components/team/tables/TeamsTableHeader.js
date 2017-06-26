import React, {Component} from 'react';
import {Th} from '../../common';

const columns = [
    {size: 35, value: 'Team'},
    {size: 20, value: 'Avg Skill'},
    {size: 20, value: 'Avg Age'},
    {size: 25, value: '# Players'},
];

class TeamsTableHeader extends Component {
    render() {
        return <Th columns={columns}/>;
    }
}

export default TeamsTableHeader;