function countZeroes(arr){
    // add whatever parameters you deem necessary - good luck!!!
    let i;
    for(i =0; i<arr.length ; i++) {
        if(arr[i] === 0) break;
    }
    return arr.length - i
  }

  console.log(countZeroes([1,1,1,0,0]))