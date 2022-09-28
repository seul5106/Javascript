/** 1) 변수 스스로 1증가 */
console.group("1) 변수 스스로 1증가");{
let selfPlus = 1;
console.log(selfPlus);

selfPlus++;
console.log(selfPlus);

++selfPlus;
console.log(selfPlus);}
console.groupEnd();
/** 2) 변수 스스로 1감소 */
console.group("2) 변수 스스로 1감소");{
let selfMinus = 1;
console.log(selfMinus);

selfMinus--;
console.log(selfMinus);

--selfMinus;
console.log(selfMinus);}
console.groupEnd();
/** 3) 전위 증감 연산자 */
console.group(" 3) 전위 증감 연산자");
let prevValue = 1;

console.log("prevValue를 먼저 1 증가 시키고 전체 수식을 처리한다.");{// prevValue를 먼저 1 증가 시키고 전체 수식을 처리한다.
let prevResult = 100 + ++prevValue;

console.log(prevResult);
console.log();}
console.groupEnd();
/** 4) 후위 증감 연산자 */
console.group(" 4) 후위 증감 연산자");
let nextValue = 1;

console.log("100+nextValue를 먼저 처리하고 나중에서야 nextValue가 1 증가한다.");{// 100+nextValue를 먼저 처리하고 나중에서야 nextValue가 1 증가한다.
let nextResult = 100 + nextValue++;

console.log(nextResult);
console.log(nextValue);}
console.groupEnd();