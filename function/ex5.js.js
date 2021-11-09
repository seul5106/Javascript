
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
