'use strict';

var memo = new Map();
memo.set(0,0);
memo.set(1,0);
memo.set(2,1);

function fib(n) {
    if (memo.has(n)){
        return memo.get(n) ;
    } 
    let tmp = fib(n - 1) + fib(n - 2) + fib(n - 3);
    memo.set(n,tmp);
    return tmp;
}
var n = 40 ;
for (let i = 0 ; i <= n ; i++){
    console.log(fib(i));
}
