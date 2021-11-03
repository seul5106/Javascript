let number = 1

if(number == 1){
    for(i=3; i<10; i+=2){
        for(j=1; j<10; j++){
            console.log("%d X %d = %d",i,j,i*j);
        }
        console.log("")
    }
}else if(number == 2){
    for(i=2; i<10; i+=2){
        for(j=1; j<10; j++){
            console.log("%d X %d = %d",i,j,i*j);
        }
    }
}

/**풀이(1) */
let start = null;
let end = null;

if (number == 1){
    start = 3;
    end = 10;
} else if(number == 2){
    start = 2;
    end = 9;
}

for (let i = start; i < end; i+=2){
    for(let j=1; j<10; j++){
        console.log("%d X %d = %d",i,j,i*j);
    }
}

/**풀이(2) */
for(let i = 4-number; i<10; i+=2){
    for(let j=1; j<10; j++){
        console.log("%d X %d = %d",i,j,i*j);
    }
}