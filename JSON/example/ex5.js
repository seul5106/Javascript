covid19 = [
    {'0125': 426}, {'0126': 343}, {'0127': 547}, {'0128': 490}, 
    {'0129': 460}, {'0130': 443}, {'0131': 338}, {'0201': 299}
]
let result =0;
let max = covid19[0][(Object.keys(covid19[0]))];;
for(let i = 1; i < covid19.length; i++){
    covid19[i][(Object.keys(covid19[i]))];
    if (max < covid19[i][(Object.keys(covid19[i]))]) {
        max = covid19[i][(Object.keys(covid19[i]))];
        result = Object.keys(covid19[i])
    }
}


console.log("확진자가 가장 많이 나타난 날: ", result)

let max_active = covid19[0]['0125']
let max_day = '0125';

for(const j of covid19){
    for (const k in j){
        if (max_active < j[k]){
            max_active = j[k]
            max_day = k;
        }

    }
}

console.log("확진자가 가장 많이 나타난 날: ", max_day);

//값을 반환하는게 아닌 처리가 목적이면 그냥 return키워드만 써도됨