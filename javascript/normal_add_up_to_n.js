const {performance} = require('perf_hooks');
// For each loop the number of operations multiplies with in that loop.
// O(n)
function addUpTo(n) {

  let sum=0;
  for (let j = 1; j <= n; j++) {
    sum += j;
  }
  return sum;
}


{
  let t1 = performance.now();
  addUpTo(1000000000);
  let t2 = performance.now();
  //Ex output: Time Elapsed: 1.2122066999971866 seconds.
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
}