import React from 'react';
import {View} from 'react-native';
import {H3, Text} from 'native-base';
import moment from 'moment';

import {DATE_FORMAT} from '../../const'

const Date = ({date}) => (
    <View>
        <H3>{`${date}`}</H3>
        <Text>{`${moment(date, DATE_FORMAT).format('dddd')}`}</Text>
    </View>
);

export {Date};