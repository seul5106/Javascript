const str1 = "HelloWorld";
console.log(str1);

const str2 = new String("Hello Javascript");
console.log(str2);

const msg = "Life is short, You need Javascript.";
console.log("문자열: " + msg);

const len = msg.length;
console.log("문자열의 길이 : " + len);

const str2nd = msg.charAt(2);
console.log("두번째 글자 : " + str2nd);

const p1 = msg.indexOf("f");
console.log("'f'가 처음 나타나는 위치 : " + p1);

console.log("'z'가 처음 나타나는 위치 : " + msg.indexOf("z"));

console.log("'short'가 처음 나타나는 위치 : " + msg.indexOf("short"));

const p2 = msg.indexOf("i");
const p3 = msg.indexOf("i", p2+1);
console.log("'i'가 첫 번째로 나타나는 위치 : " + p2);
console.log("'i'가 두 번째로 나타나는 위치 : " + p3);

const p4 = msg.lastIndexOf("a");
console.log("'a'의 마지막 위치 : " + p4);

if(msg.indexOf("Hello") > -1){
    console.log("Hello가 포함됨");
}else{
    console.log("Hello가 포함되지 않음.");
}

const substring1 = msg.substring(0, 13);
console.log("문자열 자르기 : " + substring1);

const substring2 = msg.substring(15);
console.log("문자열 자르기 : " + substring2);

const low = msg.toLowerCase();
console.log("모든 글자의 소문자 변환 : " + low);