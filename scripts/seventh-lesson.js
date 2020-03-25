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

