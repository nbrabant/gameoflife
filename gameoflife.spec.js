const isAlive = function (number) {
    return number === 3;
}

describe('game of life', () => {
    it('should be die if there are no neighbors', () => {
        expect(isAlive()).toBeFalsy()
    })

    it('should be die if there are 4 neighbors', () => {
        expect(isAlive(4)).toBeFalsy()
    })
    it('should be alive if there are 3 neighbors', () => {
        expect(isAlive(3)).toBeTruthy()
    })


})
