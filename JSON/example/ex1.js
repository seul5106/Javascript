const key = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O']
const result = { "A": 0, "B": 0, "AB": 0, "O": 0 };

for (let i = 0; i < key.length; i++) {
    if (key[i] === "A") {
        result["A"]++
    }
    else if (key[i] === "B") {
        result["B"]++
    }
    else if (key[i] === "AB") {
        result["AB"]++
    }
    else if (key[i] === "O") {
        result["O"]++
    }
}

console.log(result);



for (const b of key){
    result[b]++;
}
console.log(result);