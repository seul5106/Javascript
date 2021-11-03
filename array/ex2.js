const data = [5,2,7,9,2];

let max = data[0]

for(let i = 1; i < data.length; i++) {
    console.log("max=%d, data[%d]=%d",max,i,data[i]);

    if(max <data[i]) {
        console.log(">>max에" + data[i] +"를 복사");
        max = data[i];
    }
}

console.log("----------");
console.log("최대값 = " + max);