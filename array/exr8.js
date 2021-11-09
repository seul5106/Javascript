var arr = [5,3,2,8,9];
console.log("before -->"+arr);

for(var i = 0; i<parseInt(arr.length/2); i++){
    var tmp = arr[i];  //arr[i] = 5
    arr[i] = arr[arr.length-i-1] ;
    arr[arr.length-i-1] = tmp;
}

console.log("after -->"+arr);

