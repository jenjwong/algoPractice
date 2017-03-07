const findMax = (arr) => {
  let max = arr[1];
  let min = arr[0];

  if (arr.length - 1 < 2) {
    return -1;
  }

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min && i !== arr.length - 1) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  const maxProfit = max - min;
  return maxProfit;
}

findMax([9, 2, 3, 1]) // 1

