function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n]; 
}


function factorial(n) {
  if (n < 0) return "No definido para negativos"; 
  if (n === 0 || n === 1) return 1; 
  return n * factorial(n - 1); 
}


module.exports = math;