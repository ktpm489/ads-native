import React, {Component} from 'react';
import {View} from 'react-native';
import {
    Container,
    Content,
    Header,
    Title,
    Card,
    CardItem,
    Body,
    Form,
    Input,
    Item,
    Label,
    Text,
    H3,
    Row,
    Col,
    Button,
    Icon
} from 'native-base';
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
        if (user) {
            this.setState({
                ...user
            });
        }
    }

    isReadyToSave() {
        const {name, surname, dob} = this.state;
        return name !== '' && surname !== '' && dob !== undefined;
    }

    saveUser() {
        const {name, surname, dob} = this.state;
        this.props.save({
            name: name.trim(),
            surname: surname.trim(),
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
                    <Card>
                        <CardItem header>
                            <H3>Who are you?</H3>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Row>
                                <Text>Insert your info to start the game</Text>
                            </Row>
                            <Row>
                                <Col>
                                    <Form>
                                        <Item floatingLabel>
                                            <Label>Name</Label>
                                            <Input value={name}
                                                   onChangeText={name => this.setState({name: ucFirst(name)})}/>
                                        </Item>
                                        <Item floatingLabel>
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
                                    </Form>
                                </Col>
                            </Row>
                            <Row>
                                <Col />
                                <Col />
                                <Col />
                                <Col>
                                    <Button disabled={!this.isReadyToSave()} onPress={this.saveUser.bind(this)}>
                                        <Text>Start</Text>
                                        <Icon name="skip-forward" style={{fontSize: 15}}/>
                                    </Button>
                                </Col>
                            </Row>
                            </Body>
                        </CardItem>
                    </Card>
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

const mapDispatchToProps = dispatch => {
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