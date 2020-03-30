function isString(str) {
    return typeof str === "string";
}


function isSymbolPresentInString(str, symbol) {
    if (!isString(str)) return false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === symbol) return true; 
    }

    return false;
}

console.log(isSymbolPresentInString("abc","a"));
console.log(isSymbolPresentInString("abc","e"));


function getSymbolIndex(str, symbol) {
    if (!isString(str)) return console.error("NOT_STRING");
    for (let i = 0; i < str.length; i++) {
        if (str[i] === symbol) return i; 
    }

    return -1;
}

console.log(getSymbolIndex("hello lol","h"));
console.log(getSymbolIndex("hello lol","l"));
console.log(getSymbolIndex("hello lol","v"));


const arr = [1, 2, 3, 4, 5,];

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

forEach(arr, arrayOutput => console.log(arrayOutput));


function map(array, callback) {
    let bufferArray = [];
    for (let i = 0; i < array.length; i++) {
        bufferArray.push(callback(array[i], i));
    }
    return bufferArray;
}

let resultArray = map(arr, arrayOutput => arrayOutput);
console.log(resultArray);


function filter(array, callback) {
    let bufferArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            bufferArray.push(array[i]);
        }
    }

    return bufferArray;
}

console.log(filter(arr, item => item > 3));


function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], array)) return true;
    }
    return false;
}

console.log(some(arr, item => item === 3));
console.log(some(arr, item => item === 6));


const arrTwo = [5, 5, 5, 5, 5,];

function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if(!callback(array[i], array)) return false;
    }
    return true;
}

console.log(every(arrTwo, item => item === 5));
console.log(every(arrTwo, item => item === 6));