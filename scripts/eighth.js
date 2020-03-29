function isString(str) {
    if (typeof str === "string") return true;
    return false;
}


function isSymbolPresentInString(str, symbol) {
    for (let i = 0; i < str.length; i++) {
        if (isString(str) && str[i] === symbol) return true; 
    }

    return false;
}

console.log(isSymbolPresentInString("abc","a"));
console.log(isSymbolPresentInString("abc","e"));


function getSymbolIndex(str, symbol) {
    for (let i = 0; i < str.length; i++) {
        if (isString(str) && str[i] === symbol) return i; 
    }

    return -1;
}

console.log(getSymbolIndex("hello lol","h"));
console.log(getSymbolIndex("hello lol","l"));
console.log(getSymbolIndex("hello lol","v"));


const arr = [1, 2, 3, 4, 5,];

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) callback(array[i], i);
}

forEach(arr, arrayOutput => console.log(arrayOutput));


function map(array, callback) {
    let bufferArray = [];
    for (let i = 0; i < array.length; i++) bufferArray.push(callback(array[i], i));
    return bufferArray;
}

let resultArray = map(arr, arrayOutput => arrayOutput);
console.log(resultArray);


function filter(array, callback) {
    let bufferArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback) bufferArray.push(array[i]);
    }

    return bufferArray;
}

// filter(arr, arrayFilter => func() {});