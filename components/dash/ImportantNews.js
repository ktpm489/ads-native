import React, {Component} from 'react';
import {Card, H3, CardItem, Body, Text} from 'native-base';

class ImportantNews extends Component {

    _renderNews() {
        return this.props.news.map((n, index) => <Text key={index}>{`${n.body}`}</Text>);
    }

    render() {
        const {news} = this.props;
        return (
            <Card>
                <CardItem header>
                    <H3>Important News</H3>
                </CardItem>
                <CardItem>
                    <Body>
                    {
                        news.length ?
                            this._renderNews() :
                            <Text>Nothing important to report</Text>
                    }
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

export {ImportantNews};