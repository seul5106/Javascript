var check_list = [true, false, false, true, false];
console.log("before -->" + check_list);
for(let i = 0; i < check_list.length; i++) {
    if(check_list[i] == true) {
        check_list[i] = !true
    }else if(check_list[i] == false) {
        check_list[i] = !false
    }
}


console.log("after -->" + check_list);


for(let i = 0; i < check_list.length; i++) {
    check_list[i] = !check_list[i];
}