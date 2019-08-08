function matrixGenerator(rows, columns) {
  // do work here
  let arr2 = [];
  for (let i = 0; i < rows; i++) {
    let arr1 = [];
    for (let j = 0; j < columns; j++) {
      arr1.push(Math.floor(Math.random() * 100 + 1));
      arr1.sort((a, b) => a - b);
    }
    arr2.push(arr1);
    arr2.sort((a, b) => a[0] - b[0]);
  }
  return arr2;
}

module.exports = matrixGenerator;
