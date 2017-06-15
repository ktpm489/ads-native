import {teamHelper} from '../../libs';
import {range} from '../../utils';

describe('teamHelper tests', () => {
    test('it calculates correctly the average skill', () => {
        const roster = range(5).map(_ => {
            return {
                skill: 10
            }
        });
        expect(teamHelper.averageSkill({roster})).toBe(10);
    });

    test('it calculates correctly the average', () => {
        const roster = range(5).map(_ => {
            return {
                age: 30
            }
        });
        expect(teamHelper.averageAge({roster})).toBe(30);
    });
});