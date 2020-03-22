const CURRENT_YEAR = 2020;

function mainSecondLesson() {
    console.log(userData());
    console.log(calcAverage(getVariable()));
}

// user data functions start

function getUserName(name) {
    return prompt("Enter u`r name");
}

function getUserYear(year) {
    return +prompt("Enter u`r date of birth");
}

function calcAge(year) {
    return CURRENT_YEAR - year;
}

function userDataConcatenation(userName, userYear, userAge) {
    return `Your name is: ${userName}, 
    \nYour year of birth is: ${userYear}, 
    \nYour Age is: ${userAge}`;
}

function userData() {
    let name = getUserName();
    let year = getUserYear();
   return userDataConcatenation(name, year, calcAge(year));
}

// user data functions end

// calculate average start

function getVariable() {
    let arr = [];

    for(let i = 0; i < 3; i++) {
        arr[i] = +prompt(`Enter ${i+1} variable`);
    }

    return arr;
}

function calcAverage(numbersArray) {
    let average = 0;
    let sum = 0;

    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }

    average = sum / numbersArray.length;

    return `Sum is: ${sum} \nArithmetic average: ${average}`;
}

// calculate average end

mainSecondLesson();