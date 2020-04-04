// Copy objects parth start

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
    fieldFour: "someValueFour"
};

const someObject = {
    fieldOne: "someValueOne",
    fieldTwo: "someValuetwo"
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
    }

    return target;
}

copy(target, origin);

if (origin === target) {
    console.log("origin EQUAL target");
} else {
    console.log("origin NOT_EQUAL target");
}

if (origin.fieldThree === target.fieldThree) {
    console.log("origin.fieldThree EQUAL target.fieldThree");
} else {
    console.log("origin.fieldThree NOT_EQUAL target.fieldThree");
}

console.log(target);

// Copy objects parth end

// Equal objects parth start

const someVariable = "String00";
const someVariableVrong = "NotString";

function isObjects(obj1, obj2) {
    return isObject(obj1) && isObject(obj2);
}

function isEqual(a, b) {
    if (isObjects(a, b)) {
        for (const key in a) {
            if (a[key] !== b[key]) return false;
            if (isObject(a[key])) {
                if (!isEqual(a[key], b[key])) return false;

            }
        }
    } else if (a !== b) return false;
    return true;
}

console.log(isEqual(origin, origin));
console.log(isEqual(origin, someObject));
console.log(isEqual(someVariable, someVariable));
console.log(isEqual(someVariable, someVariableVrong));

// Equal objects parth end