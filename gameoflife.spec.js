const isAlive = function (number, alive) {
    return number === 3 || (alive && number === 2);
}

const countNeighbours = function(x ,y, grid) {
    return grid.reduce(function(carry, cell) {
        if (cell.state) {
            carry++;
        }
        return carry;
    }, 0);
}

class Cell {
    constructor(x, y, state) {
        this.x = x
        this.y = y
        this.state = state
    }
}



describe('game of life', () => {
    describe('cell alive', () => {
        it('should be dead if there are no neighbors', () => {
            expect(isAlive()).toBeFalsy()
        })

        it('should be dead if there are 4 neighbors', () => {
            expect(isAlive(4)).toBeFalsy()
        })
        it('should be alive if there are 3 neighbors', () => {
            expect(isAlive(3)).toBeTruthy()
        })
        it('should be alive if it alive and there are 2 neighbors', () => {
            expect(isAlive(2, true)).toBeTruthy()
        })
    })

    describe('count neighbors', () => {
        it('should have 0 neighbors alive', () => {
            expect(countNeighbours(0, 0, [])).toBe(0)
        })

        it('should have 1 neighbors alive', () => {
            expect(countNeighbours(0, 0, [
                new Cell(1,1,true)
            ])).toBe(1)
        })

        it('should have 2 neighbors and one alive', () => {
            expect(countNeighbours(0, 0, [
                new Cell(1,1,true),
                new Cell(0,1,false)
            ])).toBe(1)
        })
    })

})
