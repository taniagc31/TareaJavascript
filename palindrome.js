/** Solución con string */

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    const r= x+"";
    for (let i=0; i<r.length; i++) {
        if (r[i] != r[r.length-1-i]){
            return false;
        }
        return true;
    }
};

/** Solución sin string */

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x<0) return false;
    let reverse=0
    for (let i=x; i>=1; i=Math.floor(i/10)) reverse= reverse*10 + i%10;
    return reverse ===x;
};

console.log(143);