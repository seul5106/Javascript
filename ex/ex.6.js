let result =0;
for(let i = 1; i <20; i++){
    if(i%2 == 0 || i%3 == 0){
        result += i;
    }
}
console.log("2 또는 3의 배수의 총합: %d", result);
