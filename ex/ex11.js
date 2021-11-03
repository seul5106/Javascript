const Jumin = [9,5,0,2,0,4,1,0,3,2,1,1,0];
const key = [2,3,4,5,6,7,8,9,2,3,4,5]
let sum = 0;
for(i= 0; i < Jumin.length-1; i++){
       sum += Jumin[i]*key[i];
}
x = sum%11
y = (11-x)%10
if(y == Jumin[12]){
    console.log("주민번호가 유효합니다.")
}
else{
    console.log("주민번호가 유효하지 않습니다.")
}
