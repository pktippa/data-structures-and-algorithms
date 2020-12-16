function averagePair(arr, avg){
    // add whatever parameters you deem necessary - good luck!
    let end = arr.length - 1;
    let start = 0;
    while(start < end) {
        console.log(`start: ${start}, val: ${arr[start]}  end: ${end} val: ${arr[end]}`);
        const cal = (arr[start] + arr[end]) / 2;
        console.log(`cal ${cal}`)
        if(cal === avg) return true;
        if (cal > avg) end--;
        else start++;
    }
    return false;
  }

// console.log(averagePair([1,2,3],2.5));
// console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));

function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    let obj = {};
    for(let i in str1) {
        obj[i] = str1[i];
    }
    // console.log('obj ', obj);
    let m = 0, j = 0;
    while(j < str2.length) {
        if(str2[j] === obj[m]) {
            // console.log(`m: ${m}, j: ${j}  ${str2[j]} === ${obj[m]}`)
            m++;
        }
        j++;
    }
    // console.log('m : ', m);
    if (m === str1.length) return true;
    return false;
  }
  console.log(isSubsequence('hello', 'hello world')) // true
  console.log(isSubsequence('sing', 'string')) // true
  console.log(isSubsequence('abc', 'abracadabra')) // true
  console.log(isSubsequence('abc', 'acb')) // true
