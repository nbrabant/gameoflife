const isAlive = function (number, alive) {
    return number === 3 || (alive && number === 2);
}

describe('game of life', () => {
    describe('cell alive', () => {
        it('should be die if there are no neighbors', () => {
            expect(isAlive()).toBeFalsy()
        })

        it('should be die if there are 4 neighbors', () => {
            expect(isAlive(4)).toBeFalsy()
        })
        it('should be alive if there are 3 neighbors', () => {
            expect(isAlive(3)).toBeTruthy()
        })
        it('should be alive if it alive and there are 2 neighbors', () => {
            expect(isAlive(2, true)).toBeTruthy()
        })
    })



})
