

function printStar(max, current = 1) {
    // max는 최대 행의 수, current는 현재 행의 수를 의미하므로,
    // 현재 행의 수가 최대 행보다 크다면 처리 중단을 위해 return함
    
    if (current > max){
       return;
    }else{
        /** 한 줄을 출력하기 위한 코드 구성 */
        let str = "";
        for(let dot = 0; dot <current; dot++){
            str +="*";
        }
        console.log(str);
        return printStar(max, current+1)

    }
}
printStar(5);


function printRevStar(max, current=1){
    if(current > max){
        return;
    }else{
        let str = "";
        for(let i = 0; i <max-current+1; i++){
            str +="*";
        }
        console.log(str);
        return printRevStar(max, current+1)
    }
}
printRevStar(5)
