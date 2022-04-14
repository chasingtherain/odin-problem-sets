const removeFromArray = function(arr, ...removeItem) {
    let arrLength = arr.length;
    let sorted = removeItem.sort();
  
    for(i=0;i<arrLength;i++){
          for(j=0;j<removeItem.length;j++){
              if (arr[i] === removeItem[j]){
                                  arr.splice(i,1)
              }
          }
      }
      return arr;
  };

// Do not edit below this line
module.exports = removeFromArray;

/*
    check removeItem length
    double for loop
        loop through current arr
            pass remove item
            if arr has removeItem, remove current arr item
    
    return arr
*/