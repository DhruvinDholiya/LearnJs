let budgetCol = document.getElementById("budget");
let expenseCol = document.getElementById("expense");
let balanceCol = document.getElementById("balance");
let expanseArray = [];
let update = false;
let forupdateInd = null;

let budgetRef = document.getElementById("budgetAmtData");
let budgetData = 0;
let netBalance = 0;
let totalExpAmt = 0;

let expNameRef = document.getElementById("expenseNameData");
let expAmtRef = document.getElementById("expenseAmtData");

const printOnLoad = () => {
    let ls_BudgetData = JSON.parse(localStorage.getItem("_budgetData"));
    if (ls_BudgetData) {
        budgetData = ls_BudgetData;
    }

    let ls_totalExpAmt = JSON.parse(localStorage.getItem("_totalExpAmt"));
    if (ls_totalExpAmt) {
        totalExpAmt = ls_totalExpAmt;
    }

    let ls_netBalance = JSON.parse(localStorage.getItem("_netBalance"));
    if (ls_netBalance) {
        netBalance = ls_netBalance;
    }

    const createAmountElem = (amtCol, id) => {
        let h2Text = '';
        let h2 = document.createElement("h2");
        h2.setAttribute("id", id + 'Amt');

        if (id === "budget") {
            h2Text = document.createTextNode("$ " + budgetData);
        } else if (id === "balance") {
            h2Text = document.createTextNode("$ " + netBalance);
        } else if (id === "expense") {
            h2Text = document.createTextNode("$ " + totalExpAmt);
        }
        h2.appendChild(h2Text);

        amtCol.appendChild(h2);
    }

    let balanceArray = [budgetCol, expenseCol, balanceCol];
    balanceArray.map((amtCol) => {
        let id = amtCol.getAttribute("id");
        createAmountElem(amtCol, id);
    });
}
window.onload = printOnLoad();


const handleBudget = () => {
    budgetData = parseInt(budgetRef.value);
    localStorage.setItem("_budgetData", JSON.stringify(budgetData));

    document.getElementById("budgetAmt").innerHTML = '$ ' + budgetData;

    netBalance = budgetData - totalExpAmt;
    localStorage.setItem("_netBalance", JSON.stringify(netBalance));

    document.getElementById("balanceAmt").innerHTML = '$ ' + netBalance;

    budgetRef.value = '';
    event.preventDefault();
}
document.getElementById("budgetCalcForm").addEventListener("submit", handleBudget);


const calcAmount = () => {
    totalExpAmt = 0;

    expanseArray.map((expItem) => {
        totalExpAmt += expItem.expAmount;
    });
    localStorage.setItem("_totalExpAmt", JSON.stringify(totalExpAmt));

    document.getElementById("expenseAmt").innerHTML = '$ ' + totalExpAmt;

    netBalance = budgetData - totalExpAmt;
    localStorage.setItem("_netBalance", JSON.stringify(netBalance));
    document.getElementById("balanceAmt").innerHTML = '$ ' + netBalance;
}


const makeExpanseTable = (expNameData, expAmtData, randomId) => {
    let tr = document.createElement("tr");
    tr.setAttribute("id", "listRow-" + randomId)

    for (let tdCount = 0; tdCount < 3; tdCount++) {
        let td = document.createElement("td");
        if (tdCount === 0) {
            td.innerHTML = expNameData;
        } else if (tdCount === 1) {
            td.innerHTML = '$ ' + expAmtData;
        } else if (tdCount === 2) {
            let editBtn = document.createElement("button");
            editBtn.setAttribute("onclick", "sendDataForUpdate(" + randomId + ")");
            editBtn.innerHTML = "<i class='fas fa-edit'></i>";
            td.appendChild(editBtn);

            let removeBtn = document.createElement("button");
            removeBtn.setAttribute("onclick", "handleRemove(" + randomId + ")");
            removeBtn.innerHTML = "<i class='fa-solid fa-trash'></i>";
            td.appendChild(removeBtn);
        }

        tr.appendChild(td);
    }

    document.getElementById("expenseList").appendChild(tr);

    let expanseObj = { "expName": expNameData, "expAmount": expAmtData, "expId": randomId };
    expanseArray.push(expanseObj);

    localStorage.setItem("_expanseArray", JSON.stringify(expanseArray));

    calcAmount();
}


let ls_expanseArray = JSON.parse(localStorage.getItem("_expanseArray"));
if (ls_expanseArray) {
    if (ls_expanseArray.length > 0) {
        document.getElementById("expenseTable").classList = "calc_part blue_bg_text";
    }

    ls_expanseArray.map((lsArrayObj) => {
        makeExpanseTable(lsArrayObj.expName, lsArrayObj.expAmount, lsArrayObj.expId);
    });
}


const handleExpense = () => {
    document.getElementById("expenseTable").classList = "calc_part blue_bg_text";

    let expNameData = expNameRef.value;
    let expAmtData = parseInt(expAmtRef.value);

    let randomId = Math.floor(Math.random() * 1000);

    makeExpanseTable(expNameData, expAmtData, randomId);

    expNameRef.value = '';
    expAmtRef.value = '';
    event.preventDefault();
}


const handleRemove = (randomId) => {
    document.getElementById("listRow-" + randomId).remove();

    expanseArray.map((expObj, index) => {
        if (expObj.expId === randomId) {
            expanseArray.splice(index, 1);
        }
    });

    localStorage.setItem("_expanseArray", JSON.stringify(expanseArray));

    calcAmount();
    update = false;
    forupdateInd = null;
    expNameRef.value = '';
    expAmtRef.value = '';
}


const sendDataForUpdate = (randomId) => {
    update = true;
    let fExpensesData = expanseArray.filter((expObj) => expObj.expId === randomId);

    expNameRef.value = fExpensesData[0].expName;
    expAmtRef.value = fExpensesData[0].expAmount;
    forupdateInd = randomId;
}


const handleUpdate = () => {
    let updatExpensesData = expanseArray.filter((expObj) => expObj.expId === forupdateInd);
    updatExpensesData[0].expName = expNameRef.value;
    updatExpensesData[0].expAmount = parseInt(expAmtRef.value);

    localStorage.setItem("_expanseArray", JSON.stringify(expanseArray));

    calcAmount();

    let getTdForUpdate = document.getElementById("listRow-" + forupdateInd).children;

    getTdForUpdate[0].innerHTML = expNameRef.value;
    getTdForUpdate[1].innerHTML = '$ ' + expAmtRef.value;

    expNameRef.value = '';
    expAmtRef.value = '';

    update = false;
    forupdateInd = null;

    event.preventDefault();
}


const desForExpenses = () => {

    if (update) {
        handleUpdate();
    }
    else {
        handleExpense();
    }
}
document.getElementById("addExpenseForm").addEventListener("submit", desForExpenses);