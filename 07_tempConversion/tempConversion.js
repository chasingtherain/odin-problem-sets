const ftoc = function(fahrenheit) {
  let celsius =  parseInt(fahrenheit - 32) * 5 / 9;
  return parseFloat(celsius.toFixed(1));
};

const ctof = function(celsius) {
  let fahrenheit = (celsius * 1.8) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};


/*
ftoc: (x - 32) * 5 / 9

ctof: (x * 1.8) + 32

apply toFixed() to 1.d.p

*/