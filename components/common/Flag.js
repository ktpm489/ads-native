import React from 'react';
import NativeFlag from 'react-native-flags';

import {extendedNationalities} from '../../config/nationalities'

const Flag = ({nationality}) => {
    const nation = extendedNationalities[nationality];
    const flagCode = nation ? nation.flag : 'XX';
    return (
        <NativeFlag
            code={flagCode}
            size={16}
        />
    );
};

export {Flag};