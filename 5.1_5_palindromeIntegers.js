/*
function palindromeIntegers(arr){
    for(let curNum of arr){
        let isPalindrome = checkIsPalindrome(curNum);
        console.log(isPalindrome);
    }
    function checkIsPalindrome(num){
        let numStr = String(num);
        let reveresedNumStr = '';

        for(let i = numStr.length - 1; i >= 0; i--){
            let curChar = numStr[i];
            reveresedNumStr += curChar;
        }
        let isPalindrome = numStr == reveresedNumStr;
        return isPalindrome;
    }

} Alternative shorter solution:
*/
function palindromeIntegers(arr){
    for(let num of arr){
        let numStr = String(num);
        let reveresedNumStr = numStr.split('').reverse().join('');
        console.log(numStr == reveresedNumStr);
    }
}
palindromeIntegers([123,323,421,121]);
//palindromeIntegers([32,2,232,1010]);
