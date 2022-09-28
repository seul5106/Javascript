const data = [10,20,30,40,50];

data.push(60,70);
console.log(data);

const k = data.pop();
console.log(k);
console.log(data);

const x = data.shift();
console.log(x);
console.log(data);

data.unshift(0, 10);
console.log(data);

const z = data.splice(2,3)
console.log(z);
console.log(data);

data.splice(0,2,"a","b","c");
console.log(data);

data.splice(3, 0, "d", "e");
console.log(data);

const a = [1,2];
const b = [3,4,5];
const c = [6,7,8,9];
const d = a.concat(b,c);
console.log(d);