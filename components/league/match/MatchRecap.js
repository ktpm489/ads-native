import React from 'react';
import {View} from 'react-native';
import {Text} from 'native-base';

const MatchRecap = ({match}) => {
    const {result} = match;
    const {containerStyle, teamsTextStyle, resultTextStyle} = styles;
    return (
        <View style={containerStyle}>
            <Text style={teamsTextStyle}>{`${match.home} - ${match.away}`}</Text>
            {result &&
            <Text style={resultTextStyle}>{`${result.homeGoal} - ${result.awayGoal}`}</Text>
            }
        </View>
    )
};

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    teamsTextStyle: {
        flex: 3
    },
    resultTextStyle: {
        flex: 1
    }
};

export {MatchRecap};