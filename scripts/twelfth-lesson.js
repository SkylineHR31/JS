function dataPrint() {
    const date = new Date();
    console.log(date.toLocaleTimeString());
}

let timerId = setInterval(() => {
    console.clear();
    dataPrint();
}, 1000);