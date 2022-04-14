const repeatString = function(string,num) {
    let concatString = string;
    if (num < 0){
        return "ERROR"
    }

    if (num == 0){
        return ""
    }

    for(i=0;i<num-1;i++){
        concatString+=string;
    }
    return concatString
};

// Do not edit below this line
module.exports = repeatString;
