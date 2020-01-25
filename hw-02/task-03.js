'use strict';
const findLongestWord = function (string) {
  const stringMessage = string.split (' ');
  let maxWord = stringMessage[0];
  for (let i = 1; i < stringMessage.length; i++) {
    let wordMessage = stringMessage[i];
    if (maxWord.length < wordMessage.length) {
      maxWord = wordMessage;
    }
  }
  return maxWord;
};

console.log (findLongestWord ('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log (findLongestWord ('Google do a roll')); // 'Google'

console.log (findLongestWord ('May the force be with you')); // 'force'
