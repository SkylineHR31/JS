const rand = Math.floor(Math.random() * 10);

while (true) {
  let numBuffer = prompt("Try to guess a number");

  if (numBuffer === null) {
    console.error("MISSING NUMBER");
    break;
  }
  if (+numBuffer === rand) {
    console.log(`U\`r right!\nU\`r number is ${rand}`);
    break;
  }
  alert(`Try more :D \nU\`r number now is: ${rand}`);
}

/* Triangle here
(single variable) */

const triangleSize = +prompt("Enter triangle size");
let triangleString = "";

for (let i = 0; i < triangleSize; i++) {
  for (let j = 0; j <= i; j++) {
    triangleString += "0 ";
  }
  triangleString += "\n";
}

console.log(triangleString);

/* Triangle here
(with many console.log) */

const triangleSize = +prompt("Enter triangle size");

for (let i = 0; i < triangleSize; i++) {
  let triangleString = "";
  for (let j = 0; j <= i; j++) {
    triangleString += "0";
  }
  console.log(`${triangleString} \n`);
}
