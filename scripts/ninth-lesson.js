const origin = {
    fieldOne: "someValueOne",
    fieldTwo: "someValuetwo",
    fieldThree:
    {
        subFieldOne: "subSomeValueOne",
        subFieldTwo: "subSomeValueTwo"
    },
    fieldTest:
    {
        subFieldOneTest: "subSomeValueOne",
        subFieldTwoTest: "subSomeValueTwo"
    },
    fieldFour: "someValueFour",
    fieldFive : [1,2,3,4,5],
};

const target = {};

function isObject(obj) {
    return obj !== null && (typeof obj === "object");
}

function copy(target, origin) {
    for (const key in origin) {
        if (isObject(origin[key])) {
            target[key] = copy({}, origin[key]);
        } else {
            target[key] = origin[key];
        }
        if (Array.isArray(origin[key])) {
            target[key] = copy([], origin[key]);
        }
    }

    return target;
}

copy(target,origin);

console.log(target);

// deep copy section end

function makeSum() { 
    let sum = 0;

    return function (number) {
        sum += number;
        return sum;
    };
}

let sum = makeSum();

console.log(sum(3));

console.log(sum(5));

console.log(sum(20));

// make sum section end