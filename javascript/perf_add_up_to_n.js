const {performance} = require('perf_hooks');
// And the number of operations in the function is not dependent on n.
// means it does not change with value n.
// It is O(1)
function addUpTo(n) {
  // It has only 3 operations
  return n * (n-1) / 2;
}


{
  let t1 = performance.now();
  addUpTo(1000000000);
  let t2 = performance.now();
  //Ex output: Time Elapsed: 0.000033401012420654295 seconds.
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
}