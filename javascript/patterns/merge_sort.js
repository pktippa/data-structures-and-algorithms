function mergeSortedArrays(f_arr, s_arr) {
    if(f_arr.length === 0) return s_arr;
    if(s_arr.length === 0) return f_arr;
    console.log('first ', f_arr, ' second ', s_arr);
    let final_arr = [];
    let first_pointer = 0, second_pointer = 0;
    while (true) {
        console.log(`prev arr `, final_arr);
        console.log(`first_pointer ${first_pointer}, value: ${f_arr[first_pointer]}, second_pointer ${second_pointer} value: ${s_arr[second_pointer]}`);
        if(first_pointer >= f_arr.length && second_pointer >= s_arr.length){
            break;
        }
        if(first_pointer === f_arr.length ){
            final_arr.push(s_arr[second_pointer]);
            second_pointer++;
            continue;
        }
        if(second_pointer === s_arr.length) {
            final_arr.push(f_arr[first_pointer]);
            first_pointer++;
            continue;
        }

        if(f_arr[first_pointer] < s_arr[second_pointer]) {
            final_arr.push(f_arr[first_pointer]);
            first_pointer++;
        }else {
            final_arr.push(s_arr[second_pointer]);
            second_pointer++;
        }

    }
    if (second_pointer === s_arr.length && first_pointer !== f_arr.length) {
        final_arr.concat(f_arr.slice(first_pointer));
    }
    if (first_pointer === final_arr.length && second_pointer !== s_arr.length) {
        final_arr.concat(s_arr.slice(second_pointer));
    }
    return final_arr;
}

// console.log(mergeSortedArrays([1,4,7], [2,3,6])); // [ 1, 2, 3, 4, 6, 7 ]
console.log(mergeSortedArrays([1,2,2],[0]));