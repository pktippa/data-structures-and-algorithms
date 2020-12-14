function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val ** 2] = (frequencyCounter1[val ** 2] || 0) + 1
    }
    console.log(frequencyCounter1);
    for(let val of arr2){
        if (!(val in frequencyCounter1)) {
            return false;
        }
        //  = (frequencyCounter2[val] || 0) + 1        
    }
    // console.log(frequencyCounter2);
    // for(let key in frequencyCounter1){
    //     if(!(key ** 2 in frequencyCounter2)){
    //         return false
    //     }
    //     if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
    //         return false
    //     }
    // }
    return true
}

// console.log(same([1,2,3,2,5], [9,1,4,4,25]))

function sameFrequency(first, second){
    // good luck. Add any arguments you deem necessary.
    let f = {};
    while(first > 0) {
        const key = first % 10;
        // console.log('key: ', key);
        f[key] = (f[key] || 0) +1;
        first =  (first / 10) - (0.1 * key) ;
        // console.log('first: ', first);
    }
    // console.log('f', f);
    while(second > 0) {
        const key = Math.ceil(second % 10);
        if(!f[key] || f[key] == 0) {
            return false;
        }
        f[key] -= 1;
        second = (second / 10) - (0.1 * key) ;
        // console.log('f', f, ' sec ', second);
    }
    return true;
}
// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(34, 14));
// console.log(sameFrequency(3589578, 5879385));
// console.log(sameFrequency(22, 222));

function areThereDuplicates(...arr) {
    // good luck. (supply any arguments you deem necessary.)
    let obj = {};
    for(const el of arr) {
        if(obj[el]) return false;
        obj[el] = (obj[el] && obj[el] + 1) || 1;
    }
  }

// console.log(areThereDuplicates(1,2,3)); // false
// console.log(areThereDuplicates(1,2,2)); // true
// console.log(areThereDuplicates('a','b','c', 'a')); // true