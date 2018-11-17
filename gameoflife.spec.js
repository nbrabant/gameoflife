const isAlive = function () {
    return false;
}

describe('game of life', () => {
    it('should be die if there are no neighbors', () => {
        expect(isAlive()).toBeFalsy()
    })
})
