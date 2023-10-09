function power(n, exponent){
    let product = 1;
    for(let i = 0; i < exponent; i++){
        product *= n;
    }
    console.log(product);
}
power(2, 8);
power(3, 4);
power(4, 5); 