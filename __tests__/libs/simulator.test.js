import {generator} from '../../libs/generator';
import {match} from '../../libs/simulator';

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