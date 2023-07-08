let getValueRef = document.getElementById("textValue");
let listArray = [];
let update = false;
let editItemIndex = null;

const forTakeDecision = () => {
    if (update) {
        handleEditItem();
    } else {
        handleToDoList();
    }
    event.preventDefault();
}

const handleToDoList = () => {
    let inputValue = getValueRef.value;
    listArray.push(inputValue);

    makeToDoList();

    getValueRef.value = '';
}

const makeToDoList = () => {
    let printList = '<ul>';
    listArray.map((listItem, index) => {
        printList += '\
            <li>' + listItem + '\
                <button onclick= forRemoveItem('+ index + ')><i class="fa-sharp fa-solid fa-xmark"></i></button>\
                <button onclick= forEditItem('+ index + ')><i class="fa-solid fa-pen-to-square"></i></button>\
            </li>'});
    printList += '</ul>';

    document.getElementById("displayList").innerHTML = printList;
}

const forRemoveItem = (index) => {
    listArray.splice(index, 1);

    makeToDoList();
}

const forEditItem = (index) => {
    update = true;
    editItemIndex = index;
    getValueRef.value = getLocalData[index];
}

const handleEditItem = () => {
    listArray[editItemIndex] = getValueRef.value;
    makeToDoList();

    update = false;
    editItemIndex = null;
    getValueRef.value = '';
}
document.getElementById("toDoListForm").addEventListener("submit", forTakeDecision);

window.onload = makeToDoList();