import React, {Component} from 'react';
import moment from 'moment';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'native-base';

import {EventList} from './EventList';
import {DATE_FORMAT} from '../../const';
import {colors} from '../common';

class Date extends Component {
    state = {
        collapsed: true
    };

    componentDidMount() {
        const {collapsed} = this.props;
        if (collapsed !== undefined) {
            this.setState({collapsed});
        }
    }

    toggleCollapse() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        const {containerStyle, eventListStyle} = styles;
        const {date, events} = this.props;
        const {collapsed} = this.state;
        return (
            <View>
                <TouchableOpacity onPress={() => this.toggleCollapse()}>
                    <View style={containerStyle}>
                        <Text>{moment(date, DATE_FORMAT).format('MMMM Do YYYY')}</Text>
                    </View>
                </TouchableOpacity>
                <View style={eventListStyle}>
                    { !collapsed &&
                    <EventList events={events}/>
                    }
                </View>
            </View>

        );
    }
}

const styles = {
    containerStyle: {
        backgroundColor: colors.lightGray,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 10,
        marginBottom: 5,
    },
    eventListStyle: {
        flex: 1,
        marginBottom: 5,
    }
};


export {Date};