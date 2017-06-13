import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, Content, Header, Title, Body, Form, Input, Item, Label, Text, Button} from 'native-base';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import {connect} from 'react-redux';
import {HeaderSpacer} from '../common';

import {fetchUser, saveUser} from '../../store/actions';

import {ucFirst} from '../../utils';
import {DATE_FORMAT} from '../../const';


const MIN_DATE = '01-01-1900';
const DEFAULT_DATE = '01-01-1990';


class NewPlayerFormView extends Component {
    state = {
        name: '',
        surname: '',
        dob: DEFAULT_DATE
    };

    componentWillMount() {
        this.props.get();
    }

    componentDidMount() {
        const {user} = this.props;
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
            <Container>
                <HeaderSpacer/>
                <Content>
                    <View>
                        <Form>
                            <Item stackedLabel>
                                <Label>Name</Label>
                                <Input value={name} onChangeText={name => this.setState({name: ucFirst(name)})}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Surname</Label>
                                <Input value={surname}
                                       onChangeText={surname => this.setState({surname: ucFirst(surname)})}/>
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
                </Content>
            </Container>
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

const NewPlayerForm = connect(
    mapStateToProps, mapDispatchToProps
)(NewPlayerFormView);

export {NewPlayerFormView, NewPlayerForm};