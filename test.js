console.log('js');
function highComplexityLoop(n) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        count++;
      }
    }
  }

  return count;
}

console.log(highComplexityLoop(100)); // 100^3 = 1,000,000 iterations
