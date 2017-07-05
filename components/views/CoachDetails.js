import React, {Component} from 'react';
import {Container, Content, Card, CardItem, Body, Text, Row, Col, H3, Icon} from 'native-base';
import moment from 'moment';
import {connect} from 'react-redux';
import {Flag, Stars, HeaderSpacer, IndicatorBar, commonStyles} from '../common';

import {formatCurrency} from '../../utils';

const {tableHeaderTextStyle, tableRowStyle} = commonStyles;

class CoachDetailsView extends Component {
    render() {
        const {coach} = this.props.navigation;
        return (
            <Container>
                <HeaderSpacer/>
                <Content>
                    <Card>
                        <CardItem header>
                            <Row>
                                <Col>
                                    <Flag nationality={coach.nationality}/>
                                    <H3 style={{marginLeft: 5}}>{`${coach.name} ${coach.surname}`}</H3>
                                </Col>
                                <Col style={{alignItems: 'center'}}>
                                    <Icon style={{fontSize: 53}} name="ios-person"/>
                                </Col>
                            </Row>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Row style={tableRowStyle}>
                                <Col>
                                    <Text style={tableHeaderTextStyle}>Morale</Text>
                                </Col>
                                <Col>
                                    <IndicatorBar value={coach.status.morale}/>
                                </Col>
                            </Row>
                            <Row style={tableRowStyle}>
                                <Col>
                                    <Text style={tableHeaderTextStyle}>Age</Text>
                                </Col>
                                <Col>
                                    <Text>{coach.age}</Text>
                                </Col>
                            </Row>
                            <Row style={tableRowStyle}>
                                <Col>
                                    <Text style={tableHeaderTextStyle}>Position</Text>
                                </Col>
                                <Col>
                                    <Text>{coach.module}</Text>
                                </Col>
                            </Row>
                            <Row style={tableRowStyle}>
                                <Col>
                                    <Text style={tableHeaderTextStyle}>Skill</Text>
                                </Col>
                                <Col>
                                    <Stars style={{fontSize: 20}} percentage={coach.skill}/>
                                </Col>
                            </Row>
                            <Row style={tableRowStyle}>
                                <Col>
                                    <Text style={tableHeaderTextStyle}>Contract</Text>
                                </Col>
                                <Col>
                                    <Text>{`${formatCurrency(coach.wage)} (${coach.contract} years left)`}</Text>
                                </Col>
                            </Row>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header>
                            <Text>History</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Row style={tableRowStyle}>
                                <Col>
                                    <Text>{`${moment().format('YYYY')} - `}</Text>
                                </Col>
                                <Col>
                                    <Text>{coach.team}</Text>
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


const mapStateToProps = ({navigation}) => {
    return {
        navigation
    }
};

const mapDispatchToProps = dispatch => {
    return {};
};

const CoachDetails = connect(
    mapStateToProps, mapDispatchToProps
)(CoachDetailsView);

export {CoachDetailsView, CoachDetails}
