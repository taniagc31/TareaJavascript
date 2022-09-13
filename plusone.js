/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let i = digits.length-1;
    let value= 1;
    while(i>=0){
        digits[i]+=value;
        if(digits[i]-10>=0){
            value=1;
            digits[i]-=10;
        }else{
            value=0;
        }
        i--;
    }
    if(value==0) return digits;
    return [value].concat(digits);
};
