const ssn = "9203211";

now_year = 2021;

yy = parseInt(ssn.substring(0, 2));
gen = parseInt(ssn.substring(6));

yy = (gen > 2) ? yy + 2000 : yy + 1900; //2000대생과 1900년대생을 판별
age = now_year - yy + 1;
function sex() {
    let male = "남자";
    let female = "여자";
    if (gen%2 == 1) {
        return male;
    } else if (gen%2 == 0) {
        return female;
    }
}
console.log("당신은 %d세 %s 입니다.", age,sex(gen));



