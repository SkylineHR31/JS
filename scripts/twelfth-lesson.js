function datePrint() {
    const date = new Date();
    let hoursbuffer = String(date.getHours());
    let minutesbuffer = String(date.getMinutes());
    let secondsbuffer = String(date.getSeconds());

    function formateDate(buffer, outputString) {
        if (buffer.length < 2) {
            outputString = "0" + buffer;
            return outputString;
        } else return buffer; 
    }
    
    console.log(`${formateDate(hoursbuffer, "")}:${formateDate(minutesbuffer, "")}:${formateDate(secondsbuffer, "")}`);
    
}

let timerId = setInterval(() => {
    console.clear();
    datePrint();
}, 1000);