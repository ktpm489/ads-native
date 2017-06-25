import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Text, Row, Col} from 'native-base';

import {Flag, commonStyles} from '../../common';
import {selectPlayerDetails} from '../../../store/actions';

const {tableRowStyle} = commonStyles;

class PlayersTableRowView extends Component {
    showPlayerDetails() {
        this.props.select(this.props.player);
        Actions.playerDetails();
    }

    render() {
        const {player} = this.props;
        return (
            <TouchableOpacity onPress={() => this.showPlayerDetails()}>
                <Row style={tableRowStyle}>
                    <Col size={10}>
                        <Text>{` `}</Text>
                    </Col>
                    <Col size={50}>
                        <Text>{`${player.name} ${player.surname} (${player.age})`}</Text>
                        <Flag nationality={player.nationality}/>
                    </Col>
                    <Col size={20}>
                        <Text>{`${player.position}`}</Text>
                    </Col>
                    <Col size={20}>
                        <Text>{`${player.skill}`}</Text>
                    </Col>
                </Row>
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        select(player){
            dispatch(selectPlayerDetails(player));
        }
    };
};

const PlayersTableRow = connect(
    mapStateToProps, mapDispatchToProps
)(PlayersTableRowView);

export default PlayersTableRow;