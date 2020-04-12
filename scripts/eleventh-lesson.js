function Animal(gender = "male") {
    this.gender = gender;
}

Animal.prototype.run = function() {
    console.log("Run, Forest, Run!");    
}

Animal.prototype.jump = function() {
    console.log("Are you ready to jump?\nGet ready to jump\nDon't ever look back, oh baby\nYes, I'm ready to jump\nJust take my hands\nGet ready to jump");    
}

function Mammal(gender) {
    Animal.call(this, gender);
}

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

Mammal.prototype.isGiveMilk = function() {
    switch (this.gender) {
        case "male":
            return false;
        case "female":
            return true;
        default:
            console.error("WRONG_GENDER");
            break;
    }
}

function Raccoon(gender) {
    Animal.call(this, gender);
}

Raccoon.prototype = Object.create(Mammal.prototype);
Raccoon.prototype.constructor = Raccoon;

Raccoon.prototype.superRaccoonSteal = function() {
    console.log("Ha-ha, I stole your money");
}

const animal = new Animal("male");

animal.jump();
animal.run();

const mammal = new Mammal("female");

mammal.jump();
mammal.run();
console.log(mammal.isGiveMilk());

const raccoon = new Raccoon();

raccoon.jump();
raccoon.run();
console.log(raccoon.isGiveMilk("male"));

raccoon.superRaccoonSteal();