

let submitBtnSelect = document.getElementById('submitBtn');

submitBtnSelect.addEventListener('click', function () {

    let feesData = parseInt(document.getElementById('fees').value);
    let cgpaData = parseFloat(document.getElementById('cgpa').value);
    let castData = document.getElementById('cast').value;
    let msgSelect = document.getElementById('massage');

    if (!feesData || !cgpaData || !castData) {
        msgSelect.innerHTML = '<span class="invalid">Please fill all fields with valid details.</span>';
    } else {
        if (castData === 'open') {
            msgSelect.innerHTML = '<span class="warning">Sorry, If your cast is open, you can not get scholarship.</span>';
        } else {
            if (cgpaData > 9 && cgpaData <= 10) {
                grade = 'A';
            } else if (cgpaData > 8.5 && cgpaData <= 9) {
                grade = 'B';
            } else if (cgpaData > 8 && cgpaData <= 8.5) {
                grade = 'C';
            } else if (cgpaData > 7.5 && cgpaData <= 8) {
                grade = 'D';
            } else if (cgpaData <= 7.5 && cgpaData >= 0) {
                grade = 'X';
            } else {
                grade = 'Z';
            }

            const countScholarship = (persantag) => {
                scholarship = feesData * persantag;
                payableFees = feesData - scholarship;
                msgSelect.innerHTML = 'Congrats, You get <span class="valid">Rs.' + scholarship + '/-</span> scholarship because Your grade is <span class="valid">' + grade + '</span>. And your fees amount is <span class="valid">Rs.' + feesData + '/-</span> So your payable fees amount is <span class="valid">Rs.' + payableFees + '/-</span>.';
            }

            if (grade === 'A' || grade === 'B') {
                if (castData === 'obc') {
                    countScholarship(0.25);
                } else if (castData === 'sc') {
                    countScholarship(0.5);
                } else if (castData === 'st') {
                    countScholarship(1);
                }
            } else if (grade === 'Z') {
                msgSelect.innerHTML = '<span class="invalid">Invalid - Please check your added CGPA.</span>';
            } else {
                msgSelect.innerHTML = '<span class="warning">Sorry, You can not get scholarship because your CGPA should more than 8.5</span>';
            }
        };
    }
});
