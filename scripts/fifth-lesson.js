const pi = Math.PI;
function outputFormate(customFunction) {
  return console.log(
    new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 }).format(
      customFunction
    )
  );
}

function circleArea(circleRadius) {
  return pi * circleRadius ** 2;
}

function circleLength(circleRadius) {
  return 2 * pi * circleRadius;
}

function avarage(firstVar, secondVar) {
  return (firstVar + secondVar) / 2;
}

function calc(firstVar, secondVar, action) {
  switch (action) {
    case "+":
      return firstVar + secondVar;
      break;
    case "-":
      return firstVar - secondVar;
      break;
    case "*":
      return firstVar * secondVar;
      break;
    case "/":
      return firstVar / secondVar;
      break;
    case "%":
      return firstVar % secondVar;
      break;
    case "^":
      return firstVar ** secondVar;
      break;
    default:
      console.error("INVALID_ACTION");
  }
}

function main() {
  outputFormate(circleArea(3));
  outputFormate(circleLength(2));
  outputFormate(avarage(3, 10));
  outputFormate(calc(2, 2, "+"));
}

main();
