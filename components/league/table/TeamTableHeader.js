import React, {Component} from 'react';
import {Th} from '../../common';

const columns = [
    {size: 7, value: '#'},
    {size: 44, value: 'Team'},
    {size: 7, value: 'P'},
    {size: 7, value: 'W'},
    {size: 7, value: 'L'},
    {size: 7, value: 'D'},
    {size: 7, value: 'GS'},
    {size: 7, value: 'GC'},
    {size: 7, value: 'P'},
];

class TeamsTableHeader extends Component {
    render() {
        return <Th columns={columns}/>;
    }
}

export {TeamsTableHeader};