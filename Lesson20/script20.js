"use strict";

// № 1

let fibonachi = function(n){
    let fib = [];
    for(let i = 0; i < n; i++){
        if( i == 0) fib[i] = 1;
        else if(fib == 1) fib[i] = 2;
        else fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
}
console.log(fibonachi(12));




// № 2

let n = 1000, num = 0;
while (n >= 50)
{
 n = n / 2;
 num++;
}
console.log(num);
