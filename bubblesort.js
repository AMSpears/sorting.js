const bubbleSort = (arr) => {
  let orderedArr = arr.slice()
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i]
    let next = arr[i + 1]
    let currOrder = orderedArr[i]
    let nextOrder = orderedArr[i + 1]

    // TODO: figure out how to repeately compare curr and next till all is sorted into the ordered arr
    if (curr < next) {
      orderedArr.splice(nextOrder, currOrder)
    }
  }

  console.log(orderedArr)
  return orderedArr
}
