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

console.log(findNconsecutiveElementsSum([1,10,3,4,6,3,4,5], 3));
