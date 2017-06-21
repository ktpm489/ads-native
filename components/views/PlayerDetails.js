import React, {Component} from 'react';
import {Container, Content} from 'native-base';
import {connect} from 'react-redux';

import {HeaderSpacer} from '../common';

class PlayerDetailsView extends Component {
    render() {
        return (
            <Container>
                <HeaderSpacer/>
                <Content>
                    <Text>Player Details</Text>
                </Content>
            </Container>
        );
    }
}


const mapStateToProps = ({routes}) => {
    return {
        routes
    }
};

const mapDispatchToProps = dispatch => {
    return {};
};

const PlayerDetails = connect(
    mapStateToProps, mapDispatchToProps
)(PlayerDetailsView);

export {PlayerDetailsView, PlayerDetails}
