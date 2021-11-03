for (let i = 0; i < 7; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
        str += "*";
    }
    console.log(str);
}


star = -4;
for (star; star < 5; star += 2) {
    console.log(' '.repeat(Math.abs((1 - (star + 1))) / 2) + '*'.repeat(5 - Math.abs(star)));
}


