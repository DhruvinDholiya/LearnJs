let takeValueRef = document.getElementById('textValue');
let listArray = [];
let update = false;
let forUpadeIndex = null;

// for check that user want to add or update to list item.
const forTakeDec = () => {
    if(update) {
        handleEditItem();
    } else {
        handleToDoList();
    }
    
    event.preventDefault();
}

// get input value and make array
const handleToDoList = () => {

    let getLocalData = JSON.parse(localStorage.getItem("toDo"));
    let InputValue = takeValueRef.value;

    if(getLocalData) {
        getLocalData.push(InputValue);
        localStorage.setItem("toDo", JSON.stringify(getLocalData));
    } else {  
        listArray.push(InputValue);
    }
    
    

    forMakeList();

    takeValueRef.value = '';
}

// make html to do list based on array
const forMakeList = () => {

    let getLocalData = JSON.parse(localStorage.getItem("toDo"));

    if(getLocalData) {
        let printList = '<ul>';
        getLocalData.map((listItem, index) => {
            printList += '\
                <li>' + listItem + '\
                    <button onclick= forRemoveItem('+ index + ')><i class="fa-sharp fa-solid fa-xmark"></i></button>\
                    <button onclick= forEditItem('+ index +')><i class="fa-solid fa-pen-to-square"></i></button>\
                </li>';
        })
        printList += '</ul>';
    
        document.getElementById('displayList').innerHTML = printList;
    }
}

// for remove list item
const forRemoveItem = (index) => {
    let getLocalData = JSON.parse(localStorage.getItem("toDo"));

    getLocalData.splice(index, 1);

    localStorage.setItem("toDo", JSON.stringify(getLocalData));

    forMakeList();
}

// for send array at input which user want to edit.
const forEditItem = (index) => {
    let getLocalData = JSON.parse(localStorage.getItem("toDo"));
    
    update = true;
    forUpadeIndex = index;
    takeValueRef.value = getLocalData[index];
}  

// to take edited value and update in list.
const handleEditItem = () => { 
    let getLocalData = JSON.parse(localStorage.getItem("toDo"));

    let newArray = takeValueRef.value;
    getLocalData[forUpadeIndex] = newArray;

    localStorage.setItem("toDo", JSON.stringify(getLocalData));

    forMakeList(); 

    update = false;
    forUpadeIndex = null;
    takeValueRef.value = '';
}

document.getElementById('toDoListForm').addEventListener("submit", forTakeDec);

window.onload = forMakeList();

