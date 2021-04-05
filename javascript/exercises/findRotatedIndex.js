function findRotatedIndex(arr, val){
    // add whatever parameters you deem necessary - good luck!
    if(arr[0] < val) {
        // loop from the end
        for(let i = arr.length -1; i >= 0; i--) {
            if(arr[i] === val) return i;
        }
    } else {
        // loop from the begining
        for(let i = arr.length -1; i < arr.length; i++) {
            if(arr[i] === val) return i;
        }
    }
    return -1;
  }

  console.log(findRotatedIndex([6,7,8,9, 1,2,3,4], 3))