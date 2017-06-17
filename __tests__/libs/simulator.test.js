import {generator} from '../../libs/generator';
import {match} from '../../libs/simulator';
/*
 import {range} from '../../utils';
 import {teamHelper} from "../../libs/helpers/teamHelper";
 */
describe('match simulator tests', () => {

    test('simulates a game between returning result', () => {
        const home = generator.team();
        const away = generator.team();
        const result = match.simulate(home, away);
        expect(result).toEqual({
            winner: expect.any(String),
            loser: expect.any(String),
            isDraw: expect.any(Boolean),
            scorers: expect.anything(),
            homeGoal: expect.any(Number),
            awayGoal: expect.any(Number)
        });

        if (!result.isDraw) {
            expect(result.homeGoal > 0 || result.awayGoal > 0).toBe(true);
        }
    });
});
/*
 const home = generator.team();
 const away = generator.team();
 let homeWin = 0, draw = 0, awayWin = 0;
 range(100).forEach(() => {
 const result = match.simulate(home, away);
 if (result.isDraw) {
 draw += 1;
 } else if (result.homeGoal > result.awayGoal) {
 homeWin += 1;
 } else {
 awayWin += 1;
 }
 console.log(`${result.homeGoal} - ${result.awayGoal}`);
 });
 console.log(`${teamHelper.averageSkill(home)} (${homeWin}) - ${teamHelper.averageSkill(away)} (${awayWin}); draw ${draw}`);
 */