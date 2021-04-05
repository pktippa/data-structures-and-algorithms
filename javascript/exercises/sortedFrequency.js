
function sortedFrequency(arr, val){
    // add whatever parameters you deem necessary - good luck!
    let first_found = false;
    let last_found = false;
    let first_pointer = 0;
    let last_pointer = arr.length -1;
    while(first_pointer <= last_pointer) {

        if(first_found && last_found) {
            break;
        }
        if(arr[first_pointer] !== val) {
          first_pointer++;   
        } else {
            first_found = true;
        }
        if (arr[last_pointer] !== val) {
          last_pointer--;
        } else {
            last_found = true;
        }
    }
    
    if (first_found && last_found) {
        return last_pointer - first_pointer + 1;
    }
    return -1;
  }
  console.log(sortedFrequency([1,1,2,2,2,2,3], 3));
console.log(sortedFrequency([1,1,2,2,2,2,3], 2));


console.log(sortedFrequency([1,1,2,2,2,2,3], 1));
console.log(sortedFrequency([1,1,2,2,2,2,3], 4));