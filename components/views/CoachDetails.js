import React, {Component} from 'react';
import {Container, Content} from 'native-base';
import {connect} from 'react-redux';

import {HeaderSpacer} from '../common';

class CoachDetailsView extends Component {
    render() {
        return (
            <Container>
                <HeaderSpacer/>
                <Content>
                    <Text>Coach Details</Text>
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

const CoachDetails = connect(
    mapStateToProps, mapDispatchToProps
)(CoachDetailsView);

export {CoachDetailsView, CoachDetails}
