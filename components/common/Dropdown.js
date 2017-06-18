import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

const DEFAULT_PLACEHOLDER = 'Please select...';

class Dropdown extends Component {
    componentDidMount() {
        const index = this.props.defaultIndex;
        this.refs.dropdown.select(index);
    }

    _renderDropDown(element) {
        const {dropDownRowStyle, dropDownRowTextStyle} = styles;
        return (
            <TouchableOpacity>
                <View style={dropDownRowStyle}>
                    <Text style={dropDownRowTextStyle}>
                        {`${element}`}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const {
            dropDownStyle,
            dropDownTextStyle,
            dropDownContainerStyle
        } = styles;
        const {placeholder, options, onSelect} = this.props;
        return (
            <ModalDropdown
                ref="dropdown"
                defaultValue={placeholder ? placeholder : DEFAULT_PLACEHOLDER}
                style={dropDownStyle}
                textStyle={dropDownTextStyle}
                dropdownStyle={dropDownContainerStyle} options={options}
                renderRow={this._renderDropDown.bind(this)}
                onSelect={(index, value) => onSelect(value)}
            >

            </ModalDropdown>
        );
    }
}

export {Dropdown};

const styles = {
    dropDownStyle: {
        padding: 5,
        height: 40,
        backgroundColor: '#f7f7f7',
        borderWidth: 1,
        borderColor: '#000'
    },
    dropDownTextStyle: {
        fontSize: 17,
        textAlign: 'center'
    },
    dropDownContainerStyle: {
        width: 220,
        borderColor: '#699fc4',
        borderWidth: 2,
        borderRadius: 3,
    },
    dropDownRowStyle: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
    },
    dropDownRowTextStyle: {
        marginHorizontal: 4,
        fontSize: 14,
        textAlign: 'center'
    },
};