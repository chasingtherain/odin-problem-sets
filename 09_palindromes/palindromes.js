const palindromes = function (string) {
    let reverseString = string.split("").reverse().join("").toLowerCase().replace(/[!@#$&()\\-`.+,/\"" "]/ig,"")
    let cleanedString = string.toLowerCase().replace(/[!@#$&()\\-`.+,/\"" "]/ig,"")
    if (cleanedString === reverseString){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
