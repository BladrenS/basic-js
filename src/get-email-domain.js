const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = [...email];
  let index = arr.findLastIndex(item => item === '@');
  return arr.slice(index + 1, arr.length).join('');
}

module.exports = {
  getEmailDomain
};
