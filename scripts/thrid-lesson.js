const name = prompt("Your name");
const age = +prompt("Your age");
const isDrinkAlcohol = confirm(
  "Do you drink alco? (Use Ok to answer yes, and Cancel to answer - no)"
);
if (isDrinkAlcohol === true) {
  if (age >= 18 && age <= 40) {
    console.log("Please, " + name + ", dont mix bear and vodka");
  } else if (age < 18) {
    console.log("You will be sent to a orphans' home.");
  } else {
    console.log("Death is near, grandpa");
  }
} else {
  console.log("Do you want to drink rocket fuel? :D");
}
