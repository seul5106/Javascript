let lotto = [];
for (let i = 0; i <6; i++){
    let num = parseInt(Math.random()*64) + 1;
    for(let j in lotto){
        if(lotto.indexOf(num) < 0){
            num = parseInt(Math.random()*64) + 1;
        }
    }
    lotto.push(num);
}

console.log("이번주 로또 번호 : " + lotto);




function random(n1,n2){
    return parseInt(Math.random()*(n2-n1+1)+n1);
}
const lotto = new Array(6);

for (let i = 0; i < lotto.length; i++) {
    console.group("%d번째 원소 확정하기", i);
    while(true) {
        const rnd = random(1,64);
        console.log("랜덤값 생성 ::: ",rnd);
        let find = false;

        for(let j = 0; j < i; j++){
            if(rnd == lotto[j]) {
                console.log(">>> 중복된 값 찾음")
            }
        }
        if(!find){
            console.log("확정된 값 ::: ", rnd);
            lotto[i] = rnd;
            break;
        }
    }
    console.log(lotto);
    console.groupEnd();

}
console.log(lotto);
