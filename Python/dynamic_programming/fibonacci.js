// Maximum Fibonacci in nodejs
// Command to run : node  --stack-size=20000 fibonacci.js

const fib = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n<=(2n)) return BigInt(1);
    memo[n] = (fib(n-1n,memo)) + (fib(n-2n,memo));
    return memo[n];
}

//console.log(fib(BigInt(61626)));    // max limit in mac
console.log(fib(BigInt(7520)));       // // max limit in windows
// console.log(fib(BigInt(61626)).toString().length);   // 12879 (mac)

console.log(Number.MAX_SAFE_INTEGER);   // 9007199254740991

// Beyond the next line's BigInt value is also possible, but takes a long time to get the value
         //console.log(((BigInt(Number.MAX_VALUE) + BigInt(Math.pow(Number.MAX_SAFE_INTEGER,19))) ** 10000n))
//.toString()
//.length);