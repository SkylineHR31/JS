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

copy(target,origin);

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

function isObjects(obj1, obj2) {
    if ((obj1 !== null && typeof obj1 === "object") 
         && (obj2 !== null && (typeof obj2 === "object"))) {
        return true;
    } else {
        return false;
    }
}

function isEqual(obj1, obj2) {
    if (isObjects(obj1, obj2)) {
        for (const key in obj1) {
            if (!obj1[key] === obj2[key]) return false;
            if (isObject(obj1[key])) {
                if (!isEqual(obj1[key], obj2[key])) return false;
                
            }
        }
    } else return false;
    return true;
}

console.log(isEqual(origin,origin));
console.log(isEqual(origin,someObject));