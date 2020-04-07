describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3],[4, 5, 6]])
  })
  it('is able to split an odd array into two halves', function() {
    expect(split([1, 2, 3, 4, 5, 6, 7])).toEqual([[1, 2, 3, 4],[5, 6, 7]])
  })
});
describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    expect(merge([3,2,4,1,5,6])).toEqual([1,2,3,4,5,6])
    expect(merge([7, 3, 2, 4, 1, 5, 6])).toEqual([1, 2, 3, 4, 5, 6, 7])
  });
});
