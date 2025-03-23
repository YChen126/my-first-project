function addEvent() {
    // need to append new item to the list, so get it
    const list = document.getElementById("list")
    const input = document.getElementById("input");
    const text = input.value;
    if(text == "") {
        alert("please enter something: ")
        return;
    }
    
    const newItem = document.createElement("li");
    // newItem.classList.add("item");
    newItem.innerText = text;
    // no need ()
    newItem.onclick = checkedItem;

    const deleteButton = document.createElement("span");
    deleteButton.classList.add("delete");
    deleteButton.onclick = deleteItem;
    newItem.appendChild(deleteButton);

    list.appendChild(newItem);
}

function checkedItem() {
    const item = this;
    item.classList.toggle("checked");
}

function deleteItem() {
const item = this.parentNode;
parent = item.parentNode
parent.removeChild(item);
}

const addButton = document.getElementById("add-button");
addButton.addEventListener("click",addEvent);

const form = document.getElementById("inner-wrapper");
form.addEventListener("submit", (e)=> {
    e.preventDefault();
});