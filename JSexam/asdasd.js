const grade = [82, 76, 91, 98, 64]
function getMinMax() {
  let max = grade.length[0]
  let min = grade.length[0]
  for (let key1 in grade) {
    if (max < grade[key1]) {
      max = grade[key1];
    }
  }
  for (let key2 in grade) {
    if (min > grade[key2]) {
      min = grade[key2];
    }
  }
  console.log(grade)
}

console.log(getMinMax())

if (max_active < j[k]) {
  max_active = j[k];
  max_day = k;
}