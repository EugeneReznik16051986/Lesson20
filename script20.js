"use strict";

// № 1

function fib(n){
    if (n == 0){
        return 0;
    }
     else if (n == 1){
        return 1;
    }    
     else{
        return fib(n-1) + fib(n-2);
    }
}
alert( fib(8) );


// № 2

let n = 1000, num = 0;
while (n >= 50)
{
 n = n / 2;
 num++;
}
console.log(num);
