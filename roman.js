/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const table ={
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    let result= 0;
    for (i=0; i < s.length; i++){
    const value1= table[s[i]];
    const value2= table[s[i+1]];
    
    if (value1 < value2){
        result += value2-value1
        i++
    }
        else{
            result += value1
        }
            
    }
    return result;
};