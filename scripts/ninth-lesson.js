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
        subFieldTwoTest: "subSomeValueTwo",
    },
    fieldFour: "someValueFour",
    fieldFive: [1, 2, 3, 4, 5,],
    fieldSix: [
        {
            subFieldOneTest: "subSomeValueOne",
            subFieldTwoTest: "subSomeValueTwo",
        },
        {
            subFieldOneTest: "subSomeValueOne",
            subFieldTwoTest: "subSomeValueTwo",
        },
        {
            subFieldOneTest: "subSomeValueOne",
            subFieldTwoTest: "subSomeValueTwo",
        },
    ],
};

const target = {};

function isObject(obj) {
    return obj !== null && typeof obj === "object" && !Array.isArray(obj);
}


function copy(target, origin) {
    for (const key in origin) {
        if (Array.isArray(origin[key])) {
            let bufferArray = [];
            for (const iterator of origin[key]) {
                copy(bufferArray, origin[key]);
            }
            target[key] = bufferArray;
        } else if (isObject(origin[key])) {
            for (const iterator in origin[key]) {
                target[key] = copy({}, origin[key]);
            }
        } else {
            target[key] = origin[key];
        }
    }
    return target;
}

copy(target, origin);

console.log(target);

if (origin.fieldSix[1] === target.fieldSix[1]) {
    console.log("origin.fieldSix.subFieldOneTest EQUAL target.fieldSix.subFieldOneTest");
} else {
    console.log("origin.fieldSix.subFieldOneTest NOT_EQUAL target.fieldSix.subFieldOneTest");
}

if (origin.fieldSix === target.fieldSix) {
    console.log("origin.fieldSix EQUAL target.fieldSix");
} else {
    console.log("origin.fieldSix NOT_EQUAL target.fieldSix");
}

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