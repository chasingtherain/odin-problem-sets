const sumAll = function(num1,num2) {
    let small = num1;
    let big = num2;
    let sum=null;

    if (typeof(num1) != "number" || typeof(num2) != "number" 
    || num1 < 0 || num2 < 0){
        return "ERROR"
    }
    if (num1 > num2){
        big = num1;
        small = num2;
    }

    while (small <= big){
        sum += small;
        small++;
    }
    return sum;
};

sumAll(1,20)

// Do not edit below this line
module.exports = sumAll;

/*
    sort out edge cases
    identify small and big num
    init sum variable
    for loop, small as the start, big as the last num
        += sum
    return sum as answer
        

*/