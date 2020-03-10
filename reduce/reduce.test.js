import reduce from 'lodash/fp/reduce'
import add from 'lodash/fp/add'
import noop from 'lodash/fp/noop'

describe('lodash/fp/reduce', () => {
  it('should reduce list to single sum', () => {
      const itemList = [1,2,3,24,55]

      // write a function called reducedNumber below that operates on itemList
      const reducedNumber = noop

      expect(reducedNumber).toEqual(85)
  })
});