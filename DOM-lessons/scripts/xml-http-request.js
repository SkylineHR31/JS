const button = document.querySelector("button");
let xhrResponse = undefined;

function getData(url, onSuccess, onError, onStart, onEnd) {
    const xhr = new XMLHttpRequest();

    if (xhrResponse) {
        xhr.open("GET", xhrResponse.info.next);
        if (xhrResponse.info.next === null) return "Pages end";
    } else {
        xhr.open("GET", url);
    }

    xhr.responseType = "json";

    xhr.onload = function () {
        if (xhr.status === 200) {
            onSuccess(xhr.response);
            xhrResponse = xhr.response;
        } else {
            onError(xhr.response);
        }
        onEnd();
    }

    xhr.onerror = function () {
        onError("Error sending request");
        onEnd();
    }

    xhr.onabort = function () {
        console.log("ABORTED!!!");
        onEnd();
    }

    onStart();

    xhr.send();
}

function createUserList(characters) {
    const list = document.createElement("ul");

    for (const character of characters) {
        const listItem = document.createElement("li");
        const textElement = document.createTextNode(character.name);

        listItem.append(textElement);
        list.append(listItem);
    }

    return list;
}

function showList(list) {
    const container = document.querySelector("#results");
    if (container !== null) {
        container.append(list);
    }
}

button.addEventListener("click", (event) => {
    function onSuccess(data) {
        const list = createUserList(data.results);
        showList(list);
    }

    function onError(err) {
        console.error(err);
    }

    function onStart() {
        event.target.innerText = "GETTING...";
        event.target.disabled = true;
    }

    function onEnd() {
        event.target.innerText = "GET GATA";
        event.target.disabled = false;
    }

    getData("https://rickandmortyapi.com/api/character", onSuccess, onError, onStart, onEnd);
});

function createSelect(selectOptions) {
    let select = document.createElement('select');

    for (let i = 0; i < selectOptions; i++) {
        let option = new Option((i + 1) + " page", i);
        select.add(option, select[i]);
    }

    document.body.prepend(select);
}

createSelect(30);