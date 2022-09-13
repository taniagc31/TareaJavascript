/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    const lastwords = s.trim() .split(' ');
     const lengthwords = lastwords.pop() || '';
     return lengthwords.length
 };
 
