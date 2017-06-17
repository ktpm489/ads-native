import {teamHelper, playerHelper} from '../../libs';
import {range} from '../../utils';

describe('playerHelper tests', () => {
    test('it leaves the morale as it is if no modifiers specified', () => {
        const player = {
            status: {
                morale: 10
            }
        };
        expect(playerHelper.updateStatus(player).status.morale).toBe(10);
    });

    test('it reduce the morale if decrease modifiers specified', () => {
        const player = {
            status: {
                morale: 100
            }
        };
        expect(playerHelper.updateStatus(player, {decreases: [{chance: 100, value: 90}]}).status.morale).toBe(10);
    });

    test('it uplift the morale if increase modifiers specified', () => {
        const player = {
            status: {
                morale: 90
            }
        };
        expect(playerHelper.updateStatus(player, {increases: [{chance: 100, value: 10}]}).status.morale).toBe(100);
    });

    test('it does not uplift the morale if increase modifiers specified and morale already 100', () => {
        const player = {
            status: {
                morale: 100
            }
        };
        expect(playerHelper.updateStatus(player, {increases: [{chance: 100, value: 10}]}).status.morale).toBe(100);
    });

    test('it does not reduce the morale if decrease modifiers specified and morale already 0', () => {
        const player = {
            status: {
                morale: 0
            }
        };
        expect(playerHelper.updateStatus(player, {decreases: [{chance: 100, value: 10}]}).status.morale).toBe(0);
    });

    test('it applies both uplift and decrease', () => {
        const player = {
            status: {
                morale: 80
            }
        };
        expect(playerHelper.updateStatus(
            player,
            {
                increases: [{chance: 100, value: 10}],
                decreases: [{chance: 100, value: 10}]
            })
            .status.morale).toBe(80);
    });
});

describe('teamHelper tests', () => {
    test('it calculates correctly the average skill', () => {
        const roster = range(5).map(_ => {
            return {
                skill: 10
            }
        });
        expect(teamHelper.averageSkill({roster})).toBe(10);
    });

    test('it calculates correctly the average age', () => {
        const roster = range(5).map(_ => {
            return {
                age: 30
            }
        });
        expect(teamHelper.averageAge({roster})).toBe(30);
    });

    test('it updates correctly the average team morale', () => {
        const roster = range(5).map(_ => {
            return {
                status: {
                    morale: 10
                }
            }
        });
        expect(teamHelper.updateStatus({roster}).status.morale).toBe(10);
    });

    test('it gets a list of scorers', () => {
        const team = {
            roster: [
                {
                    position: 'S'
                },
                {
                    position: 'S'
                },
                {
                    position: 'D'
                },
                {
                    position: 'D'
                },
                {
                    position: 'GK'
                },
            ]
        };
        const goals = 3;

        const scorers = teamHelper.scorers(team, goals);
        expect(scorers.length).toBe(goals);
        expect(scorers.filter(p => p === 'GK').length).toBe(0);
    });

    test('Method canPlayModule returns true if team can play its module', () => {
        const team = {
            coach: {
                module: '4-4-2'
            },
            roster: [
                {position: 'S'},
                {position: 'S'},
                {position: 'LM'},
                {position: 'RM'},
                {position: 'CM'},
                {position: 'CM'},
                {position: 'D'},
                {position: 'D'},
                {position: 'LD'},
                {position: 'RD'},
                {position: 'GK'}
            ]
        };

        expect(teamHelper.canPlayModule(team)).toBe(true);
    });

    test('Method canPlayModule returns false if team cant play its module', () => {
        const team = {
            coach: {
                module: '4-4-2'
            },
            roster: [
                {
                    position: 'S'
                },
                {
                    position: 'S'
                },
                {
                    position: 'D'
                },
                {
                    position: 'D'
                },
                {
                    position: 'GK'
                },
            ]
        };

        expect(teamHelper.canPlayModule(team)).toBe(false);
    });

    test('it gets a list of number players per role', () => {
        const team = {
            roster: [
                {
                    position: 'S'
                },
                {
                    position: 'S'
                },
                {
                    position: 'D'
                },
                {
                    position: 'D'
                },
                {
                    position: 'GK'
                },
            ]
        };
        expect(teamHelper.playersPerRole(team)).toEqual({
            GK: 1,
            S: 2,
            D: 2,
            CM: 0,
            LD: 0,
            LM: 0,
            LS: 0,
            RD: 0,
            RM: 0,
            RS: 0
        });
    });
});