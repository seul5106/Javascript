const number = 130;
let sum = 0;

for(i=1; i<=number; i++){
    if(i%3 == 0){
        sum += i;
    }
}
console.log(sum)