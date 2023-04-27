let inputSelector = document.getElementById('getValue');
let errorSelector = document.getElementById('error');

inputSelector.addEventListener('keypress', function () {
    if (inputSelector.value == "^[A-Za-z][A-Za-z0-9_]{7,29}$") {
        errorSelector.innerHTML = 'Invalid - Please check your added input';
    } else {
        errorSelector.innerHTML = '';
    }
});

inputSelector.addEventListener('focus', function () {
    this.style.borderColor = '#0000ff';
});
inputSelector.addEventListener('blur', function () {
    if (inputSelector.value == "") {
        this.style.borderColor = '#ff0000';
        errorSelector.innerHTML = 'This input is required.';
    } else {
        this.style.borderColor = '#ffff00';
    }
});