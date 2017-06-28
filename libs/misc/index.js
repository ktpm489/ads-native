import {extendedPositions} from '../../config/positions';
export const byPlayerPosition = (player, other) => {
    return extendedPositions[player.position].weight <= extendedPositions[other.position].weight ? -1 : 1;
};