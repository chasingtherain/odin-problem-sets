const caesar = function(message, adjustment) {
    let count = 0;
    let encryptedArr = [];
    let movement = adjustment % 26;
    for(i=0;i<message.length;i++){
        let uniCode = message.charCodeAt(i)
        let adjustedUniCode = 0;
        if (uniCode >= 65 && uniCode <= 90){

            if (uniCode + movement > 90){
                adjustedUniCode = uniCode + movement - 26
                encryptedArr.push(String.fromCharCode(adjustedUniCode))
                continue;
            }
            if (uniCode + movement < 65){
                adjustedUniCode = uniCode + movement + 26
                encryptedArr.push(String.fromCharCode(adjustedUniCode))
                continue;
            }

            encryptedArr.push(String.fromCharCode(uniCode + movement))

        }
        else if (uniCode >= 97 && uniCode <= 122){

            if (uniCode + movement > 122){
                adjustedUniCode = uniCode + movement - 26;
                encryptedArr.push(String.fromCharCode(adjustedUniCode));
                continue;
            }
            if (uniCode + movement < 97){
                adjustedUniCode = uniCode + movement + 26;
                encryptedArr.push(String.fromCharCode(adjustedUniCode));
                continue;
            }

            encryptedArr.push(String.fromCharCode(uniCode + movement))
        }
        else {
            encryptedArr.push(message[i]);
        }
    }
    return encryptedArr.join("");
};

// Do not edit below this line
module.exports = caesar;
