import {randomizer} from '../generator/randomizer';
const MIN_MORALE = 0;
const MAX_MORALE = 100;

const playerHelper = {
    updateStatus(player, modifiers = {}){
        let morale = player.status.morale;
        const {increases, decreases} = modifiers;

        if (increases && increases.length) {
            increases.forEach(mod => {
                morale = randomizer.chance(mod.chance) ? morale + mod.value : 0;
            });
        }

        if (decreases && decreases.length) {
            decreases.forEach(mod => {
                morale = randomizer.chance(mod.chance) ? morale - mod.value : 0;
            });
        }

        morale = morale < MIN_MORALE ? MIN_MORALE : morale;
        morale = morale > MAX_MORALE ? MAX_MORALE : morale;

        return {
            ...player,
            status: {
                ...player.status,
                morale
            }
        }
    }
};

export {playerHelper};