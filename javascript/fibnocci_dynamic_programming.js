const mem = [0,1,1];

// memorize the fibnoncci value at the respective index
function fib(n) {
    if(!mem[n]) {
        let first, second;
        if (!mem[n-1]){
            mem[n-1] = fib(n-1);
        }
        first = mem[n-1];

        if (!mem[n-2]) {
            mem[n-2] = fib(n-2);
        }
        second = mem[n-2]
        mem[n] = first + second;
    }
    return mem[n];
}

console.log(fib(99));