var student = ["둘리","도우너","또치","희동"]

var grade = [
    [78,89,96],
    [62,77,67],
    [54,90,80],
    [100,99,98]
];
var avg = 0;
var sum = 0;
var allAvg = 0;
for(let i = 0; i < grade.length; i++){
    let personal_sum = 0;
    for(let j = 0; j < grade[i].length; j++){
        sum += grade[i][j];
        personal_sum += grade[i][j];    
        
    }
    let personal_avg = personal_sum/(grade[i].length);
    allAvg +=  personal_avg/student.length;
    console.log("%s의 총점: %d 평균 : %d", student[i],personal_sum, personal_avg.toFixed(2))
    
}
console.log("반평균=%d",allAvg);









