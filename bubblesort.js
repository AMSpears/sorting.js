// followed example from article below
//https://medium.com/javascript-algorithms/javascript-algorithms-bubble-sort-3d27f285c3b2

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let firstItem = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = firstItem
      }
    }
  }
  return arr
}
