import {generator} from '../../libs';
import {range} from '../../utils';

describe('generator', () => {
    test('it generates a random player', () => {
        const player = generator.player();
        expect(player).toEqual({
            name: expect.any(String),
            surname: expect.any(String),
            age: expect.any(Number),
            skill: expect.any(Number),
            position: expect.anything()
        });
    });

    range(10).forEach(_ => {
        console.log(_, generator.player());
    })
});