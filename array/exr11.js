const item =[
    [291,500],
    [586,320],
    [460,100],
    [558,120],
    [18,92],
    [72,30]
];
let sum = 0;
let result =0;
for(let i = 0; i < item.length; i++){
    sum = (item[i][0]*0.9)*item[i][1];
    result += sum;
}
console.log("아이템 총 판매가격: %dG", result);









