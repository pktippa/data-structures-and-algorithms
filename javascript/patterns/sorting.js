const data = [4,1, 15,2, 29,7];

function bubbleSort(arr) {
    console.log('given array: ', arr);
    for (let i = arr.length - 1; i > 0; i--) {
        let noSwaps = true;
        for(let j = 0; j < i; j++) {
            console.log(`i: ${i} , arr[i]: ${arr[i]} , j: ${j}, arr[j]: ${arr[j]} `)
            if (arr[j] > arr[j+1]) {
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
                noSwaps = false;
            }
        }
        //  at the end of inner loop one biggest element goes to end
        if (noSwaps) break;
    }
    return arr;
}

// console.log('bubble sorted array ', bubbleSort(data));

function selectionSort(arr){
    console.log(`before sort : `, arr);
    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for(let j = i + 1; j < arr.length; j++) {
            console.log(`${arr[j]} < ${arr[min]}`);
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            console.log(`swap ${arr[i]} < = > ${arr[min]}`);
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
        console.log(`after iteration : `, arr);
    }
    return arr;
}

// console.log('selection sorted array ', selectionSort(data));



function insertionSort(arr){
    console.log(`original `,arr)
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log('insertion sorted array ', insertionSort(data));