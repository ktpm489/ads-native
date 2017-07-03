import React from 'react';
import {View} from 'react-native';
import {Icon} from 'native-base';

import {range} from '../../utils';

const STAR_TOTAL = 5;

const Stars = ({percentage, style}) => {
    const {containerStyle, starIconStyle} = styles;
    const iconStyle = {
        ...starIconStyle,
        ...style
    };
    let icon = 'md-star-outline';
    let fullStars = Math.floor(percentage / 20);
    let partlyStar = (percentage / 20) - Math.floor(percentage / 20);
    const stars = range(STAR_TOTAL).map((_, index) => {
        if (fullStars > 0) {
            fullStars--;
            icon = 'md-star';
        } else if (partlyStar > 0.25) {
            partlyStar = 0;
            icon = 'md-star-half';
        }
        return <Icon key={index} style={iconStyle} name={icon}/>;
    });
    return <View style={containerStyle}>{stars}</View>
};

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row'
    },
    starIconStyle: {
        fontSize: 15
    }
};

export {Stars};