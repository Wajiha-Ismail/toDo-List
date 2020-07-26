var list = document.getElementById("list");

function addTask(){
    var items = document.getElementById("items");

    // creating list
    var li = document.createElement("li");
    var listText= document.createTextNode(items.value);
    li.setAttribute("id","items.value")
    li.appendChild(listText);
    list.appendChild(li);
    items.value = "";

    // creating delete button
    var delBtn = document.createElement("button");
    var delText= document.createTextNode("Delete");
    delBtn.setAttribute("class", "dBtn");
    delBtn.setAttribute("onClick", "deleteItem(this)");
    delBtn.appendChild(delText);

    // creating edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.setAttribute("class", "eBtn");
    editBtn.setAttribute("onClick", "editItem(this)");
    editBtn.appendChild(editText);

    li.appendChild(delBtn);
    li.appendChild(editBtn);

}


function deleteItem(del){
    del.parentNode.remove();
}



function editItem(edit){
    var val = prompt("Update Value", edit.parentNode.firstChild.nodeValue);
    edit.parentNode.firstChild.nodeValue = val;
}


function deleteAll(){
    list.innerHTML = ""
}

