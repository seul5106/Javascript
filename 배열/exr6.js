let price = [38000, 20000, 17900, 17900];
let qty = [6,4,3,5];
let money = 0;
let count= 0;

for (i = 0; i < price.length; i++){
    money = price[i] * qty[i];
    if (money >= 80000){
        count++;
    }
}
console.log("무료배송 항목: %d" , result);



for (let i = 0; i < data.length-1; i++) {
    for (let j = i + 1; j < data.length; j++) {
        if(data[i] > data[j]){
            const tmp = data[i];
            data[i] = data[j];
            data[j] = tmp;
        }
    }
}