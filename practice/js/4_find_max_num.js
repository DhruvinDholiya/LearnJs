document.getElementById('submitBtn').addEventListener('click', function () {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt( document.getElementById('n2').value);
    var n3 = parseInt( document.getElementById('n3').value);

    console.log(n1, n2, n3);

    if (n1 > n2) {
		if (n1 > n3) {
			document.getElementById('bigNum').innerHTML = n1;
		} else {
			document.getElementById('bigNum').innerHTML = n3;
		}
	} else {
		if (n2 > n3) {
			document.getElementById('bigNum').innerHTML = n2;
		} else {
			document.getElementById('bigNum').innerHTML = n3;
		}
	}
	
});