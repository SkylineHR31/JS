const buttonPlus = document.querySelectorAll(".btn-plus");
const buttonMinus = document.querySelectorAll(".btn-minus");
const counters = document.querySelectorAll(".counter");
const buttons = document.querySelectorAll(".square");

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    let counter = counters[i];

    button.addEventListener("click", event => {
        if (event.target === buttonPlus[i]) {
            counter.value++;
        }
    
        if (event.target === buttonMinus[i]) {
            counter.value--;
            
        }

        if (counter.value < 0) counter.value = 0;
    });
}

const squares = document.querySelectorAll(".change-color");

for (let i = 0; i < squares.length; i++) {
    let square = squares[i];

    square.addEventListener("click", () => {
        if(square.classList.contains("default-color")) {
            square.classList.remove("default-color");
            square.classList.add("lightsalmon-color");
        }

        if(square.classList.contains("lightsalmon-color")) {
            square.classList.remove("lightsalmon-color");
            square.classList.add("lightgreen-color");
        }

        if(square.classList.contains("lightgreen-color")) {
            square.classList.remove("lightgreen-color");
            square.classList.add("lightgoldenrodyellow-color");
        }
    });
}