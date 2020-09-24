
function countUpAndDownN(n){
  console.log('Counting up.');
  // the below loop O(n)
  for (let i = 1; i <= n; i++) {
    console.log(i);    
  }
  // the below loop takes O(n)
  console.log('Counding down');
  for (let j = n; j >= 1; j--) {
    console.log(j);    
  }
}

// we may say O(n) + O(n) => O(2n) 
// see we are only interested in the trend so it is again O(n)
countUpAndDownN(10)