const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
   let arrOfIndex = [];
   arr.map((item, index) => {
    if (item === -1) {
      arrOfIndex.push(index);
    }
   })
   const sortedArr = arr.filter(item => item !== -1).sort((a,b) => a - b)
   let counter = 0;
   return arr.map((item, index) => {
     if (arrOfIndex.includes(index)) {
       return -1
     }
     return sortedArr[counter++]
   })
 }

module.exports = {
  sortByHeight
};
