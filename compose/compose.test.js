import compose from 'lodash/fp/compose'
import reduce from 'lodash/fp/reduce'
import add from 'lodash/fp/add'
import map from 'lodash/fp/map'
import noop from 'lodash/fp/noop'

// lodash/fp/reduce
// lodash/fp/add
// lodash/fp/compose
describe('lodash/fp/compose', () => {
    it('should reduce list to single sum', () => {
        const itemList = [1,2,3,24,55]

        // write an identity function called id below (see readme)
        const id = noop
        
        // write a function called reduceList below that composes a reduce function and a identity/map function, and applies that to itemList
        const reduceList = noop
        expect(reduceList).toEqual(85)
    })
});