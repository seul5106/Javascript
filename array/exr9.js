var student = ["둘리","도우너","또치","희동"]

var grade = [
    [78,89,96],
    [62,77,67],
    [54,90,80],
    [100,99,98]
];

var avg = 0;

for(let i = 0; i < grade.length; i++){
    let personal_sum = 0;
    for(let j = 0; j < grade[i].length; j++){
        personal_sum += grade[i][j];    
    }
    
    let personal_avg = personal_sum/(grade[i].length);
    console.log("%s의 총점: %d 평균 : %s", student[i],personal_sum, personal_avg.toFixed(2))
}



