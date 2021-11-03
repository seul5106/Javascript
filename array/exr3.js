var time = [7, 5, 5, 5, 5, 10, 7];
var money = 0;

for (var i = 0; i < time.length; i++) {
    if (i < 4) {
        money += time[i] * 4500;    //같은 코드는 안쓰는게 좋음
    } else {
        money += time[i] * 5200;
    }
    /** let x = 0;          
     *  if (i < 4){
     *      x = 4500; 
     * }else{
     *      x = 5200;
     * }
     * money += time[i] * x;
     */
    //money += time[i]*((i<4) ? 4500 : 5200);
}


console.log("1주일간의 전체 급여:" + money + "원");


