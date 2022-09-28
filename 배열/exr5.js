let price = [38000, 20000, 17900, 17900];
let qty = [6,4,3,5];
let money = 0;      // let money = price[0] * qty[0];

let maxPrice = price[0]*qty[0]

for (i = 0; i < price.length; i++){
    money = price[i] * qty[i];
    if (money > maxPrice){
        maxPrice = money;
    }
    /**
     *  const sum = price[i] * qty[i];
     *  if (money<sum){
     *      money = sum
     * }
     */
}
console.log("가장 높은 상품금액: %d",maxPrice);