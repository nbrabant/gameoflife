const isAlive = state => neighboursCount => {
    return neighboursCount === 3 || (state && neighboursCount === 2);
}

const countNeighbours = (x, y, grid) => {
    return grid.reduce((carry, line) => {
        return line
    }, 0)
}

describe('game of life', () => {
    describe('game of life -- is alive', () => {
        it('should die if there are no neighbours', () => {
            expect(isAlive(true)(0)).toBeFalsy();
        });

        it('should birth if there are 3 neighbours', () => {
            expect(isAlive(false)(3)).toBeTruthy();
            expect(isAlive(true)(3)).toBeTruthy();
        })

        it('should die if alive and there are 4 neighbours', () => {
            expect(isAlive(true)(4)).toBeFalsy();
        })

        it('should rest in same state if there are 2 neighbours', () => {
            expect(isAlive(true)(2)).toBeTruthy();
            expect(isAlive(false)(2)).toBeFalsy();
        })
    });

    describe('game of life -- count neighbours', () => {
        it('should have zero neighbours', () => {
            expect(countNeighbours(0, 0, [
                ['X', ' '],
                [' ', ' ']
            ])).toBe(0);
        })
    });
});
