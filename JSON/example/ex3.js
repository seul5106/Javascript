const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}

let sum = 0;
let avg = 0;
for (let key in exam) {
         for (let i = 2; i < exam[key].length-1; i++) {
    sum += exam[key][i];
    }
  avg = sum / exam[key].length
  
}
console.log("모든 학생의 수학 총점은 %s점 이고 평균은 %s점 입니다.",sum,avg.toFixed(0));


let sum = 0;
let student_count = 0;
for (const key in exam) {
  sum += exam[key][2]
  student_count++;
}

let avg = sum/ student_count;
console.log("모든 학생의 수학 총점은 %d점 이고 평균은 %d점 입니다.",sum,avg.toFixed(0));