const fibonacci = function(value) {
    let fib = parseInt(value);
    if (fib < 0) {
        return "OOPS";
    }
    if (fib == 0) {
        return "Provide a number greater than 0";
    }
    if (fib == 1 || fib == 2){
        return 1;
    }
    if (fib > 1){
        return fibonacci(fib-1) + fibonacci(fib-2);
    }
};


// Do not edit below this line
module.exports = fibonacci;
