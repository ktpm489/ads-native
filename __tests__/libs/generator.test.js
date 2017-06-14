import {generator} from '../../libs';
import {range} from '../../utils';

describe('generator', () => {
    test('it generates a random player', () => {
        const player = generator.player();
        expect(player).toEqual({
            name: expect.any(String),
            surname: expect.any(String),
            nationality: expect.any(String),
            age: expect.any(Number),
            skill: expect.any(Number),
            position: expect.anything()
        });
    });

    test('it generates a random player, forcing position value', () => {
        const position = generator.position();
        const player = generator.player({position});
        expect(player).toEqual({
            name: expect.any(String),
            surname: expect.any(String),
            nationality: expect.any(String),
            age: expect.any(Number),
            skill: expect.any(Number),
            position
        });
    });

    test('it generates a random player, forcing nationality value', () => {
        const nationality = generator.nationality();
        const player = generator.player({nationality});
        expect(player).toEqual({
            name: expect.any(String),
            surname: expect.any(String),
            position: expect.any(String),
            age: expect.any(Number),
            skill: expect.any(Number),
            nationality
        });
    });

    /*
    range(10).forEach(_ => {
        const nationality = generator.nationality();
        const player = generator.player({nationality});
        console.log(player);
    });
    */

});