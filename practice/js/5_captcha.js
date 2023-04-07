let autoNum1 = Math.floor((Math.random() * 10));
let autoNum2 = Math.floor((Math.random() * 10));

let num1 = document.getElementById("num1").placeholder = autoNum1;
let num2 = document.getElementById("num2").placeholder = autoNum2;


document.getElementById('submitBtn').addEventListener('click', function () {


    let ans = parseInt(document.getElementById('ans').value);

    let numTotle = num1 + num2;

    if (numTotle == ans) {
        document.getElementById('ans').classList.add('true');
    } else {
        document.getElementById('ans').classList.add('false');
        document.getElementById('ans').placeholder = numTotle;
        alert("Your ans should: " + numTotle);

    }
    setTimeout(function () {
        window.location.reload();
    }, 1000);

});