const reverseString = function(string) {
    let splitArr = string.split("")
    console.log(splitArr)
    let reversedArr = [];
    let reversedString;

    for (i=1;i<=splitArr.length;i++){
      reversedArr.push(splitArr[splitArr.length-i])
    }
    reversedString = reversedArr.join("");
    return reversedString
};


// Do not edit below this line
module.exports = reverseString;

/*
    split string at ""
    for loop through split string
    pop and add into a new array
    join array into text
    return array*/