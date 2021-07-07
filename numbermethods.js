let x = 123;
undefined
x.toString();
"123"
x.toExponential(x);
VM1796:1 

Uncaught RangeError: toExponential() argument must be between 0 and 100
    at Number.toExponential (<anonymous>)
    at <anonymous>:1:3
(anonymous) @ VM1796:1



let y = 9;
undefined
y.toExponential(y);
"9.000000000e+0"

let x = 9.656;
x.toFixed(0);
"10"

let x = 9.656;
undefined
x.toPrecision(2);
"9.7"

let x = 123;
x.valueOf();
123

Number(new Date("2017-09-30"));
1506729600000

let x = Number.MAX_VALUE;
undefined
console.log(x);
VM1908:
 1.7976931348623157e+308


let x = Number.POSITIVE_INFINITY;
undefined
console.log(x);
VM1921:1
 Infinity
undefined