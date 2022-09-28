let a = new Number(123);
console.log(a);
console.log(typeof a);
console.log(a == 123);

let b = new Number("123");
console.log(b);
console.log(typeof b);
console.log(b == 123);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);

console.log(Number.isNaN("123"));
console.log(Number.isInteger("123"));
console.log(Number.isInteger(123));

console.log(Number.Number.parseFloat("123"));
console.log(Number.Number.parseInt("123"));