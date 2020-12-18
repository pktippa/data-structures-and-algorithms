var twoSum = function(nums, target) {
    // build as you move towards the array
    // add difference => original value - target with key
    // and index (i) as value of the object key
    // check if current value exists as key
    let knowledge = {}
    for(var i = 0; i < nums.length;i++){
        console.log('so far: ', knowledge);
        console.log('nums[i] ', nums[i]);
        if(knowledge[nums[i]] !== undefined) {
            return [knowledge[nums[i]], i];
        }
        const abs = target - nums[i];
        // const abs = diff(nums[i], target);//nums[i] > target ? (nums[i]) - (target) : (target) - (nums[i]);
        console.log('abs', abs);
        knowledge[abs] = i;
    }
};

function diff( x, y ) {
    if ( Math.sign( x ) === Math.sign( y ) ) {
        const sign = Math.sign(x);
        return sign * Math.abs( x - y );

    } else {
        // return Math.abs( x ) + Math.abs( y );

        return x > y ? x - y : y - x;
    };

};

// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([0,3,-3,4,-1],-1));
console.log(twoSum([-1,-2,-3,-4,-5], -8));
