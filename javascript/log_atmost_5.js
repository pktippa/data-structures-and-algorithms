function logAtMost5(n) {
  // Here the loop runs through n unless it is less than 5, which is smaller.
  // Since we are interested in performance based in chaning input to bigger numbers.
  // even when we increase the n value the output cannot change only prints maximum of 5 which is a constant
  // it will be O(1) 
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i)
  }
}

// logAtMost5(2) // logAtMost5(10)
logAtMost5(10)