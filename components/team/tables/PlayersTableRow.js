import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Text} from 'native-base';

import {PLAYER_DETAILS} from '../../../const/routes';
import {Flag, Tr} from '../../common';
import {selectPlayerDetails} from '../../../store/actions';


class PlayersTableRowView extends Component {
    showPlayerDetails() {
        this.props.select(this.props.player);
        Actions[PLAYER_DETAILS]();
    }

    render() {
        const {player} = this.props;
        const columns = [
            {
                size: 5,
                value: <Text>{` `}</Text>
            },
            {
                size: 50,
                value: (
                    <View>
                        <Text>{`${player.name} ${player.surname} (${player.age})`}</Text>
                        <Flag nationality={player.nationality}/>
                    </View>
                ),
            },
            {
                size: 25,
                value: <Text>{`${player.position}`}</Text>,
            },
            {
                size: 20,
                value: <Text>{`${player.skill}`}</Text>,
            }
        ];
        return (
            <TouchableOpacity onPress={() => this.showPlayerDetails()}>
                <Tr columns={columns}/>
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