import React, {Component} from 'react';
import {View} from 'react-native';
import {H2, Form, Input, Item, Label, Text, Button} from 'native-base';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import {connect} from 'react-redux';

import {fetchUser, saveUser} from '../../store/actions';

import {ucFirst} from '../../utils';
import {DATE_FORMAT} from '../../const';


const MIN_DATE = '01-01-1900';
const DEFAULT_DATE = '01-01-1990';


class NewUserFormView extends Component {
    state = {
        name: '',
        surname: '',
        dob: DEFAULT_DATE
    };

    componentDidMount() {
        const user = this.props.get();
        console.log('in did', user);
        this.setState({
            ...user
        });
    }

    saveUser() {
        const {name, surname, dob} = this.state;
        this.props.save({
            name,
            surname,
            dob
        });
    }

    render() {
        const {name, surname, dob} = this.state;
        const {dobContainerStyle} = styles;
        return (
            <View>
                <H2>New Player</H2>
                <Form>
                    <Item stackedLabel>
                        <Label>Name</Label>
                        <Input value={name} onChangeText={name => this.setState({name: ucFirst(name)})}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Surname</Label>
                        <Input value={surname} onChangeText={surname => this.setState({surname: ucFirst(surname)})}/>
                    </Item>
                    <View style={dobContainerStyle}>
                        <Label>Date of Birth</Label>
                        <DatePicker
                            style={{width: 200}}
                            date={dob}
                            mode="date"
                            placeholder="select date"
                            format={DATE_FORMAT}
                            minDate={MIN_DATE}
                            maxDate={moment().format(DATE_FORMAT)}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }}
                            onDateChange={dob => {
                                this.setState({dob})
                            }}
                        />
                    </View>
                    <Button onPress={this.saveUser.bind(this)}>
                        <Text>Save</Text>
                    </Button>
                </Form>
            </View>
        );
    }
}

const styles = {
    dobContainerStyle: {
        padding: 10
    }
};

const mapStateToProps = ({user}) => {
    return {
        user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        save(user){
            dispatch(saveUser(user));
        },
        get(){
            dispatch(fetchUser());
        }
    };
};

const NewUserForm = connect(
    mapStateToProps, mapDispatchToProps
)(NewUserFormView);

export {NewUserFormView, NewUserForm};