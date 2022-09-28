const ssn = "950204-1******";
const since = ssn.charAt(0) + ssn.charAt(1);
const month = ssn.charAt(2) + ssn.charAt(3);
const day = ssn.charAt(4) + ssn.charAt(5);

function sex(){
    let male = "남자";
    let female = "여자";
if(ssn.charAt(7) == 1){
    return male;
}else if(ssn.charAt(7) == 2){
    return female;
}
}


console.log("19%s년 %s월 %s일에 태어난 27세 %s 입니다.",since, month, day, sex(ssn.charAt(7)));



const ssn = "950204-1******";
now_year = 2021;

yy = parseInt(ssn.substring(0,2));
mm = parseInt(ssn.substring(2,4));
dd = parseInt(ssn.substring(4,6));
gen = parseInt(ssn.substring(7,8));

yy = (gen > 2) ? yy+2000 : yy+1900;
age = now_year - yy + 1;
sex = (gen % 2) ? "남자" : "여자";

console.log("%d년 %d월 %d일에 태어난 %d세 %s 입니다.", yy, mm ,dd, age, sex);