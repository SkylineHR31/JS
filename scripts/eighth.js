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