function myGame(n) {
    for (let i = 1; i <= n; i++) {
        let a = i / 10, b = i % 10;
        if (a == 3 || a == 6 || a == 9) {
            if (b == 3 || b == 6 || b == 9) {
                console.log("짝짝");
                continue;
            }
            console.log("짝");
        }
        else if (b == 3 || b == 6 || b == 9) {
            console.log("짝");
        } else {
            console.log(i+"");
        }
    }
}

myGame(36)