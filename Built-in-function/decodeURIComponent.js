var set1 = ";,/?:@&=+$#";
var set2 = "-_.!~*'()";
var set3 = "ABC abc 123";
var set4 = "자바스크립트";

var enc1 = encodeURIComponent(set1);
var enc2 = encodeURIComponent(set2);
var enc3 = encodeURIComponent(set3);
var enc4 = encodeURIComponent(set4);



console.log(decodeURIComponent(enc1));
console.log(decodeURIComponent(enc2));
console.log(decodeURIComponent(enc3));
console.log(decodeURIComponent(enc4));
