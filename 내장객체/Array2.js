let arr1 = [1,0,false];

console.log(arr1.indexOf(0));
console.log(arr1.indexOf(false));
console.log(arr1.indexOf(null));
console.log("")

console.log(arr1.includes(1));
console.log(arr1.includes(100));
console.log("")


const arr2 = [NaN];
console.log(arr2.indexOf(NaN));
console.log(arr2.includes(NaN));
console.log("")
const arr3 = [5,12,8,131,44];

const found = arr3.find(function (v){
    if (v%2 ==0){
        return true;
    }else{
        return false;
    }
});
console.log(found);
console.log("")

const arr4 = [5,12,8,131,44];
const results = arr4.filter(function(v, i, arr){
    if(v%2 == 0){
        return true;
    }else{
        return false;
    }
});
console.log(results);
console.log("")

const arr5 = [2, 1, 15];

arr5.sort(function(a, b){
    console.log("a=%s, b=%s", a, b);

    if(a > b){
        return 1;
    }else{
        return -1;
    }

});
console.log(arr5);
console.log("")


let arr6 = [1,2,3,4,5];
arr6.reverse();
console.log(arr6);