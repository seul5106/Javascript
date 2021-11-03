var price = [38000, 20000, 17900, 17900]
var qty = [6,4,3,5];
var money = 0;

for (var i = 0; i < price.length; i++) {
    for (var j = 0; j < qty.length; j++){
        i = j;
        money +=  price[i]*qty[j];
    }
}
/** for (let i = 0; i < price.length; i++) {
 *      money +=  price[i]*qty[i];
 *  }
 */


console.log("전체 결재 금액 : " + money + "원")
