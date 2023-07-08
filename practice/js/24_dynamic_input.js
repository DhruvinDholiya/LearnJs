let dataArray = [];

const addNewRow = () => {
    let randomNum = (Math.random(Math.floor) * 1000).toFixed(0);

    let rowDiv = document.createElement("div");
    rowDiv.setAttribute("id", "row-" + randomNum);

    let fName = document.createElement("input");
    fName.setAttribute("placeholder", "First Name");
    fName.setAttribute("name", "fName");

    let lName = document.createElement("input");
    lName.setAttribute("placeholder", "Last Name");
    lName.setAttribute("name", "lName");

    let plusBtn = document.createElement("button");
    plusBtn.setAttribute("onclick", "addNewRow()");
    plusBtn.setAttribute("type", "button");
    let plusTxt = document.createTextNode("+");
    plusBtn.appendChild(plusTxt);

    let minusbtn = document.createElement("button");
    minusbtn.setAttribute("onclick", "removeRow(" + randomNum + ")");
    minusbtn.setAttribute("type", "button");
    let minusTxt = document.createTextNode("-");
    minusbtn.appendChild(minusTxt);

    rowDiv.appendChild(fName);
    rowDiv.appendChild(lName);
    rowDiv.appendChild(plusBtn);
    rowDiv.appendChild(minusbtn);

    document.getElementById("inputFeilds").appendChild(rowDiv);

    dataArray = [];
}

const removeRow = (randomId) => {
    document.getElementById("row-" + randomId).remove();
    dataArray = [];
}

const handleFormData = () => {
    let fnameData = document.getElementsByName("fName");
    let lnameData = document.getElementsByName("lName");

    for (i = 0; i < fnameData.length; i++) {
        dataArray.push({ "First Name": fnameData[i].value, "Last Name": lnameData[i].value });
    }

    console.log(dataArray);

    dataArray = [];
    event.preventDefault();
}


document.getElementById("submitBtn").addEventListener("click", handleFormData);