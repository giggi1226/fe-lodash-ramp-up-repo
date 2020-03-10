import union from 'lodash/fp/union';

describe('lodash/fp/union', () => {
  it('should merge arrays together', () => {
    const arrayOne = [1, 2, 3];
    const arrayTwo = [4, 5, 6];
    const unionize = union(arrayTwo, arrayOne);

    expect(unionize).toEqual([...new Set([...arrayOne, ...arrayTwo])])
  });
});
