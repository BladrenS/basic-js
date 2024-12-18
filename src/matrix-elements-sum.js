const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (!matrix || matrix.length === 0) return 0;
  const rows = matrix.length;
  const cols = matrix[0].length;
  let result = 0;
  const blockColumn = new Set();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (blockColumn.has(j)) {
         continue;
      }
      if (matrix[i][j] === 0) {
         blockColumn.add(j);
      } else {
         result += matrix[i][j];
      }
    }
  }
  return result
}

module.exports = {
  getMatrixElementsSum
};
