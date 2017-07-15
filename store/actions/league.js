import {fixtureGenerator, teamHelper} from '../../libs';

export const generateLeague = teams => {
    const table = teamHelper.createCleanTable(teams);
    const fixture = fixtureGenerator.generate(teams);

    console.log(table, fixture);
};