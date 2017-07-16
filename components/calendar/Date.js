import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Card, CardItem, Text, Body} from 'native-base';
import {EventList} from './EventList';
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
        const {date, events} = this.props;
        const {collapsed} = this.state;
        return (
            <Card>
                <TouchableOpacity onPress={() => this.toggleCollapse()}>
                    <CardItem header>
                        <Text>{date}</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                        { !collapsed &&
                        <EventList events={events}/>
                        }
                        </Body>
                    </CardItem>
                </TouchableOpacity>
            </Card>
        );
    }
}

export {Date};