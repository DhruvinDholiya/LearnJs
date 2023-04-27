// const handlleOnClick = () => {
//     console.log("Onclick");
// }

// let onClickBtn = document.getElementById("click");
// onClickBtn.addEventListener("click", function() {
//     console.log("click");
// });


// let mouseOver = document.getElementById("mouseOver");
// mouseOver.addEventListener("mouseover", function() {
//     console.log("Mouse over");
// });

// let mouseOut = document.getElementById("mouseOut");
// mouseOut.addEventListener("mouseout", function() {
//     console.log("Mouse Out");
// });

let onkeyUp = document.getElementById("name");
onkeyUp.addEventListener("keyup", function () {
    let value = onkeyUp.value;

    if (value === '' || value != 'a') {
        document.getElementById('error').innerHTML = 'invalid';
    } else {
        document.getElementById('error').innerHTML = value;
    }
});