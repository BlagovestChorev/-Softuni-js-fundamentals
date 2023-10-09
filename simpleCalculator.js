function solve (a, b, operator){
    let multiply = (a, b) => a * b;
    let add = (a, b) => a + b;
    let divide = (a, b) => a / b;
    let subtract = (a, b) => a - b;

    let oprations = [
        multiply,
        add,
        divide,
        subtract,
    ];
    let index;

    switch(operator){
        case 'multiply':
            index = 0;
            break;
        case 'add':
            index = 1;
            break;
        case 'divide':
            index = 2;
            break;
        case 'subtract':
            index = 3;
            break;
    }
    let operation = oprations[index];
    console.log(operation(a, b));

}
solve(5, 5, 'multiply');
solve(5, 3, 'add');
solve(40, 8, 'divide');
solve(50, 13, 'subtract');