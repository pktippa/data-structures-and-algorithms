function logAtleast5(n) {
  // Here the loop runs through n unless it is less than 5.
  // Since we are interested in performance based in chaning input to bigger numbers.
  // we only have to worry n with bigger number in which case it will be O(n) 
  for (let i = 1; i <= Math.max(n, 5); i++) {
    console.log(i)
  }
}

logAtleast5(2) // logAtleast5(10)