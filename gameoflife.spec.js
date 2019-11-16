const isAlive = (currentState, numberOfneightboors) => {
    if (currentState && numberOfneightboors < 2) {
        return false
    }
    return true
};

describe('game of life', () => {
    describe('game of life -- alive or dead', () => {
        it('should dead cell be alive if has 3 neigthboors', () => {
            expect(isAlive(false, 3)).toBeTruthy()
        })

        it('should alive cell be dead if has 1 neigthboor', () => {
            expect(isAlive(true, 1)).toBeFalsy()
        })
    })
})
