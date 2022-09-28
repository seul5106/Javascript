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

// 문자열의 앞/뒤 공백 지우기
const src1 = " Hello World ";
const src2 = src1.trim();
console.log(src1);
console.log(src2);

// 문자열에 포함된 구분자를 기준으로 문자열을 잘라 배열로 반환한다.
const txt = "HTML,css,Javascript";
const arr = txt.split(",");
console.log(arr);

// 첫 번째 파라미터의 내용을 두 번째 파라미터로 변경한 결과를 반환한다.
// 첫 번째 파라미터와 일치하는 내용이 둘 이상 존재할 경우 첫 번째 항목만 변경한다.
const txt2 = txt.replace(",","$")
console.log(txt2);

// 해결책 -> 정규표현식을 사용
// 변경할 원본 앞 뒤에 /,/gi를 적용
const txt3 = txt.replace(/,/gi, "$");
console.log(txt3);

// String 자체의 기능을 확장
if(String.prototype.replaceAll == undefined){ 
    String.prototype.replaceAll = function(from, to) {
        return this.replace(new RegExp(from, "gi"),to);
    }
  
}

let test = "Hello Javascript, World Javascript";
console.log(test.replaceAll("Javascript", "자바스크립트"));







