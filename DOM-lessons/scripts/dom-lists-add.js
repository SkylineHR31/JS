function listAdd(whereInsert) {
    let targetElement = document.querySelector(whereInsert);
    let ul = document.createElement('ul');
    targetElement.append(ul);
    ul.className = "js-generated-list";

    return function listAddInner(list, curentLayer = ".js-generated-list") {
        let parentNode = document.querySelector(curentLayer);

        list.forEach(element => {
            let li = document.createElement('li');
            li.className = "list-item";
            let subUl = document.createElement('ul');
            subUl.className = "sub-list";

            if (element instanceof Array) {
                parentNode.append(li);
                parentNode.lastElementChild.append(subUl);

                element.forEach(element => {
                    let li = document.createElement('li');
                    li.className = "list-item";
                    li.innerHTML = element;
                    let subListElement = document.querySelector(".sub-list");
                    subListElement.append(li);
                });
            } else {
                parentNode.append(li);
                li.innerHTML = element;
            }
        });
    }
}

function tableAdd(whereInsert) {
    let targetElement = document.querySelector(whereInsert);
    let table = document.createElement('table');
    targetElement.prepend(table);
    table.className = "table";
    let tableElement = document.querySelector(".table");

    return function tableAddInner(cellCount) {
        let counter = 1;

        for (let i = 0; i < cellCount; i++) {
            let tr = document.createElement('tr');
            tr.className = "table-row";
            tableElement.append(tr);

            for (let j = 0; j < cellCount; j++) {
                let td = document.createElement('td');
                td.className = "table-cell";
                td.innerHTML = +counter;
                tableElement.lastElementChild.append(td);
                counter++;
            }        
        }
    }
}

const list = listAdd(".container");

list([1, 2, 3,]);

list([1, 2, [1.1, 1.2, 1.3], 3] );

const table = tableAdd(".container");

table(10);