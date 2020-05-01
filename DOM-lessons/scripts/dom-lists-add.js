function generateList(list) {
    const ul = document.createElement("ul");
    ul.className = "list";

    list.forEach(element => {
        const li = document.createElement("li");
        li.className = "list";
        li.innerHTML = element;

        if (element instanceof Array) {
            ul.append(generateList(element));
        } else {
            ul.append(li);
        }
    });

    return ul;
}
function table(cellCount) {
    const table = document.createElement("table");
    table.className = "table";
    let counter = 1;
  
    for (let i = 0; i < cellCount; i++) {
      const tr = document.createElement("tr");
      tr.className = "table-row";
      table.append(tr);
  
      for (let j = 0; j < cellCount; j++) {
        const td = document.createElement("td");
        td.className = "table-cell";
        td.innerHTML = +counter;
        tr.append(td);
        counter++;
      }
    }
  
    return table;
  }
  
  document.body.append(table(10));
  

document.body.append(generateList([1, 2, 3]));
document.body.append(generateList([1, 2, [1.1, 1.2, 1.3], 3]));