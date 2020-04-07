function split(wholeArray) {
  let firstHalf;
  let secondHalf;
  /* your code here to define the firstHalf and secondHalf arrays */
  if (wholeArray.length % 2 === 0) {
    let halfIndex = wholeArray.length / 2
    firstHalf = wholeArray.slice(0, wholeArray[halfIndex] - 1)
    secondHalf = wholeArray.slice(halfIndex)
    // console.log(firstHalf)
    // console.log(secondHalf)
  } else {
    let middle = Math.round(wholeArray.length / 2)
    firstHalf = wholeArray.slice(0, wholeArray[middle] - 1)
    secondHalf = wholeArray.slice(middle)
  }
  return [firstHalf, secondHalf];
}


function merge(firstArr, secondArr) {
  return [...firstArr, ...secondArr]
}
