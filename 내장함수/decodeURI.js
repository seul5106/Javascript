var set1 = ";,/?:@&=+$#";
var set2 = "-_.!~*'()";
var set3 = "ABC abc 123";
var set4 = "자바스크립트";

var enc1 = encodeURI(set1);
var enc2 = encodeURI(set2);
var enc3 = encodeURI(set3);
var enc4 = encodeURI(set4);



console.log(decodeURI(enc1));
console.log(decodeURI(enc2));
console.log(decodeURI(enc3));
console.log(decodeURI(enc4));
