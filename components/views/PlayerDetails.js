import React, {Component} from 'react';
import {Container, Content, Text} from 'native-base';
import {connect} from 'react-redux';

import {HeaderSpacer} from '../common';

class PlayerDetailsView extends Component {
    render() {
        const {player} = this.props.navigation;
        return (
            <Container>
                <HeaderSpacer/>
                <Content>
                    <Text>{`${player.name} ${player.surname}`}</Text>
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
