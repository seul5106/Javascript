const student = {
    studno: 10101,
    grade: 1,
    name: "학생1",
    phoneno: "010-9057-0451"
};

console.group("출력 type1");
console.log("학번: " + student.studno);
console.log("학년: " + student.grade);
console.log("이름: " + student.name);
console.log("연락처: " + student.phoneno);
console.groupEnd();

console.group("출력 type2");
console.log("학번: " + student["studno"]);
console.log("학년: " + student['grade']);
console.log("이름: " + student['name']);
console.log("연락처: " + student['phoneno']);
console.groupEnd();
