function isPalindrome(number) {
    let numStr = number.toString();
    let reversedStr = numStr.split('').reverse().join('');
    return numStr === reversedStr;
  }
  
  function checkPalindromes(numbers) {
    let results = [];
  
    for (let i = 0; i < numbers.length; i++) {
      let currentNumber = numbers[i];
      let isPalin = isPalindrome(currentNumber);
      results.push(isPalin);
    }
  
    return results;
  }
  
  let inputNumbers = [123, 323, 421, 121];
  let palindromeResults = checkPalindromes(inputNumbers);
  
  for (let i = 0; i < palindromeResults.length; i++) {
    let isPalin = palindromeResults[i];
    console.log(isPalin ? "true" : "false");
  }