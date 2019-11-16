const isAlive = (currentState, numberOfneightboors) => {
    if (currentState && (numberOfneightboors < 2 || numberOfneightboors > 3)) {
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

        it('should alive cell be dead if has 4 neigthboors', () => {
            expect(isAlive(true, 4)).toBeFalsy()
        })
    })
})
