import React, {Component} from 'react';
import {Container, Content, Text} from 'native-base';
import {connect} from 'react-redux';

import {HeaderSpacer} from '../common';

class TeamDetailsView extends Component {
    render() {
        console.log(this.props.routes);
        return (
            <Container>
                <HeaderSpacer/>
                <Content>
                    <Text>Team Details</Text>
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

const TeamDetails = connect(
    mapStateToProps, mapDispatchToProps
)(TeamDetailsView);

export {TeamDetailsView, TeamDetails}
