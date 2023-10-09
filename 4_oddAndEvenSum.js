function oddEvenSum(number) {
    let evenSum = 0;
    let oddSum = 0;
  
    let numStr = number.toString();
  
    for (let i = 0; i < numStr.length; i++) {
      let digit = parseInt(numStr[i]);
  
      if (digit % 2 === 0) {
        evenSum += digit;
      } else {
        oddSum += digit;
      }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
  }
  //oddEvenSum(1000435);
  oddEvenSum(3495892137259234);