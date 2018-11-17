const isAlive = function (number) {
    return false;
}

describe('game of life', () => {
    it('should be die if there are no neighbors', () => {
        expect(isAlive()).toBeFalsy()
    })


        it('should be die if there are 4 neighbors', () => {
            expect(isAlive(4)).toBeFalsy()
        })
    })
