function perfectNumber (num){
    let sumProperDivisers = 0;

    for(let divisor = 1; divisor < num; divisor++){
        if(num % divisor == 0){
            sumProperDivisers += divisor;
        }
    }
    if(sumProperDivisers == num){
        console.log("We have a perfect number!");
    } else{
        console.log("It\'s not so perfect.");
    }
}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);