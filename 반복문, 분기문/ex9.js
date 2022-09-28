let y = 0;
for(let x = 1; x<10; x++){
    y += x*8
}
console.log("구구단 8단의 총합은 %d입니다", y)

if(y%2 == 0){
    console.log("8단의 총합은 짝수입니다.");
}else{
    console.log("8단의 총합은 홀수입니다.");
}