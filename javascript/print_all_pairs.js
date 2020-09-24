function printAllPairs(n) {
  // it takes O(n)
  for (let i = 0; i < n; i++) {
    // the inner loop takes again O(n)
    for (let j = 0; j < n; j ++) {
      console.log(i, j);
    }
  }
}

// So overall the inner loop runs O(n) operations times the outer loop of O(n)
// So it is multiple of O(n) X O(n) => O(n^2) 
// which is a quadratic term.
printAllPairs(5)