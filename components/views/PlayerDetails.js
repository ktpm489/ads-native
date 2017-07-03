import React, {Component} from 'react';
import {Container, Content, Card, CardItem, Body, Text, Row, Col, H3} from 'native-base';
import {connect} from 'react-redux';
import {Flag, Stars, HeaderSpacer, IndicatorBar, commonStyles} from '../common';

import {formatCurrency} from '../../utils';
import {extendedPositions} from '../../config/positions';

const {tableHeaderTextStyle, tableRowStyle} = commonStyles;

class PlayerDetailsView extends Component {
    render() {
        const {player} = this.props.navigation;
        return (
            <Container>
                <HeaderSpacer/>
                <Content>
                    <Card>
                        <CardItem header>
                            <Flag nationality={player.nationality}/>
                            <H3 style={{marginLeft: 5}}>{`${player.name} ${player.surname}`}</H3>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Row style={tableRowStyle}>
                                <Col>
                                    <Text style={tableHeaderTextStyle}>Morale</Text>
                                </Col>
                                <Col>
                                    <IndicatorBar value={player.status.morale}/>
                                </Col>
                            </Row>
                            <Row style={tableRowStyle}>
                                <Col>
                                    <Text style={tableHeaderTextStyle}>Age</Text>
                                </Col>
                                <Col>
                                    <Text>{player.age}</Text>
                                </Col>
                            </Row>
                            <Row style={tableRowStyle}>
                                <Col>
                                    <Text style={tableHeaderTextStyle}>Position</Text>
                                </Col>
                                <Col>
                                    <Text>{extendedPositions[player.position].description}</Text>
                                </Col>
                            </Row>
                            <Row style={tableRowStyle}>
                                <Col>
                                    <Text style={tableHeaderTextStyle}>Skill</Text>
                                </Col>
                                <Col>
                                    <Stars style={{fontSize: 20}} percentage={player.skill}/>
                                </Col>
                            </Row>
                            <Row style={tableRowStyle}>
                                <Col>
                                    <Text style={tableHeaderTextStyle}>Contract</Text>
                                </Col>
                                <Col>
                                    <Text>{`${formatCurrency(player.wage)} (${player.contract} years left)`}</Text>
                                </Col>
                            </Row>
                            <Row style={tableRowStyle}>
                                <Col>
                                    <Text style={tableHeaderTextStyle}>Value</Text>
                                </Col>
                                <Col>
                                    <Text>{`${formatCurrency(player.value)}`}</Text>
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

const PlayerDetails = connect(
    mapStateToProps, mapDispatchToProps
)(PlayerDetailsView);

export {PlayerDetailsView, PlayerDetails}
