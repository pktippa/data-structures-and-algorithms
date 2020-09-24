const {performance} = require('perf_hooks');
// For each loop the number of operations multiplies with in that loop.
// O(n)
function addUpTo(n) {

  let sum=0; // single assignment
  // let j =1  is single assignment, doesnt change with n
  // j <= n has n operations, as n grow the operations count grow
  // j++ is acutaly j += 1 and alos iterated with as n grows, it is n assigments and n additions
  for (let j = 1; j <= n; j++) {
    // this also runs n times as n grows the number of operations grows
    // n additions, n assignment
    sum += j;
  }
  return sum;
}

// total of 
// 1 + 1 + n (comparison) + n (addition) + n (assignment) + n (addition) + n (assignment)
// 5n + 2 operations
// regardless of exact number, the number of operations grows roughly with proportinal to n.
// can be called as O(n)


{
  let t1 = performance.now();
  addUpTo(1000000000);
  let t2 = performance.now();
  //Ex output: Time Elapsed: 1.2122066999971866 seconds.
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
}