function findNconsecutiveElementsSum(arr, num) {
    if (arr.length < num) return null;

    let maxSum = 0;
    let i =0;
    for (; i < num; i++) {
        maxSum += arr[i];
    }
    console.log(`max sum: ${maxSum}`);
    let tempSum = maxSum;
    for (let j = i; j < arr.length; j++) {
        tempSum = arr[j] + tempSum - arr[j - num];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
}

// console.log(findNconsecutiveElementsSum([1,10,3,4,6,3,4,5], 3));


function maxSubarraySum(arr, num){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length < num) return null;
    let maxS = 0;
    let i =0;
    // calculate initial max som
    for(; i < num; i++){
        maxS += arr[i];
    }
    let tempS = maxS;
    console.log(`before maxS: `, maxS);
    
    for(let j = i;j < arr.length;j++) {
        tempS = tempS - arr[j - num] + arr[j];
        console.log(`temps ${tempS}`);
        if (tempS > maxS) maxS = tempS;
    }
    return maxS;
  }
console.log(maxSubarraySum([100,200,300,400], 2));