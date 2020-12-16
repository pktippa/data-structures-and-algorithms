function binarySearch(arr, val){
    // add whatever parameters you deem necessary - good luck!
    let left = 0;
    console.log(arr);
    let right = arr.length - 1;
    // console.log('right ', right);
    while(right > left){
      let middle = Math.round((left + right) / 2);
    //   console.log('middle ', middle);
    //   console.log('left ', left);
    //   console.log('right ', right);
    //   console.log('arr[middle] ', arr[middle]);
      if(!(arr[middle])) return -1;
      if(arr[middle] === val) return middle;
      if(arr[middle] > val) right = middle;
      if(arr[middle] <= val) left = middle;
    }
    return -1;
  }

  console.log(binarySearch([1,2,3,4,5], 6)); 