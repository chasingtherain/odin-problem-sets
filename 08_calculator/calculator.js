const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arr) {
	let totalSum = 0; 
  for(i=0;i<arr.length;i++){
    totalSum += arr[i];
  }
  return totalSum;
};

const multiply = function(arr) {
  let totalSum = 1; 
  for(i=0;i<arr.length;i++){
    totalSum *= arr[i];
  }
  return totalSum;
};

const power = function(num1,power) {
	return num1 ** power;
};

const factorial = function(num) {
	if (num == 0){
    return 1;
  }
  else{
    return num * factorial(num-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
