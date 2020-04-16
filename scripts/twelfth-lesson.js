function dataPrint() {
    const date = new Date();
    let hoursbuffer = String(date.getHours());
    let minutesbuffer = String(date.getMinutes());
    let secondsbuffer = String(date.getSeconds());

    function formateData(buffer, outputString) {
        if (buffer.length < 2) {
            outputString = "0" + buffer;
        }
        
        return buffer; 
    }
    
    console.log(`${formateData(hoursbuffer, "")}:${formateData(minutesbuffer, "")}:${formateData(secondsbuffer, "")}`);
    
}

let timerId = setInterval(() => {
    console.clear();
    dataPrint();
}, 1000);