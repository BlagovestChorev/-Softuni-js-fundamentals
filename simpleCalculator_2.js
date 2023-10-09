function solve (a, b, operator){
    let operations = {
     'multiply': (a, b) => a * b,
     'add': (a, b) => a + b,
     'divide': (a, b) => a / b,
     'subtract': (a, b) => a - b
    };

    let operation = operations[operator];
    console.log(operation(a, b));
}
solve(5, 5, 'multiply');
solve(5, 3, 'add');
solve(40, 8, 'divide');
solve(50, 13, 'subtract');

/* Advance solution on the above task
(a, b, operator) => ({
     'multiply': (a, b) => a * b,
     'add': (a, b) => a + b,
     'divide': (a, b) => a / b,
     'subtract': (a, b) => a - b
    }[operator](a, b))
*/