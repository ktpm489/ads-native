import React from 'react';
import {Text} from 'native-base';

import {commonStyles} from './styles';

const B = ({children}) => (<Text style={commonStyles.boldTextStyle}>{children}</Text>);

export {B};