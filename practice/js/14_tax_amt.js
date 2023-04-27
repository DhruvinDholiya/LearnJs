document.getElementById('submitBtn').addEventListener("click", () => {
    let salaryData = parseInt(document.getElementById('salary').value);
    let errorSelect = document.getElementById('error');

    if (!salaryData) {
        errorSelect.innerHTML = '<label></label><span class="invalid">Please enter your salary amount.</span>'
    } else if (salaryData <= 0) {
        errorSelect.innerHTML = '<label></label><span class="invalid">Invalid - Please check your added amount.</span>'
    } else {
        errorSelect.innerHTML = '';

        let S1, S2, S3, S4, S5, S6, totalTax;

        if (salaryData <= 300000) {
            S1 = 0;
            S2 = "---";
            S3 = "---";
            S4 = "---";
            S5 = "---";
            S6 = "---";
            totalTax = S1;

        } else if (salaryData > 300000 && salaryData <= 600000) {
            S1 = 0;
            S2 = (salaryData - 300000) * 0.05;
            S3 = "---";
            S4 = "---";
            S5 = "---";
            S6 = "---";
            totalTax = S1 + S2;

        } else if (salaryData > 600000 && salaryData <= 900000) {
            S1 = 0;
            S2 = 300000 * 0.05;
            S3 = (salaryData - 600000) * 0.10;
            S4 = "---";
            S5 = "---";
            S6 = "---";
            totalTax = S1 + S2 + S3;

        } else if (salaryData > 900000 && salaryData <= 1200000) {
            S1 = 0;
            S2 = 300000 * 0.05;
            S3 = 300000 * 0.10;
            S4 = (salaryData - 900000) * 0.15;
            S5 = "---";
            S6 = "---";
            totalTax = S1 + S2 + S3 + S4;
            
        } else if (salaryData > 1200000 && salaryData <= 1500000) {
            S1 = 0;
            S2 = 300000 * 0.05;
            S3 = 300000 * 0.10;
            S4 = 300000 * 0.15;
            S5 = (salaryData - 1200000) * 0.20;
            S6 = "---";
            totalTax = S1 + S2 + S3 + S4 + S5;
        } else if (salaryData > 1500000) {
            S1 = 0;
            S2 = 300000 * 0.05;
            S3 = 300000 * 0.10;
            S4 = 300000 * 0.15;
            S5 = 300000 * 0.20
            S6 = (salaryData - 1500000) * 0.30;
            totalTax = S1 + S2 + S3 + S4 + S5 + S6;
        }

        document.getElementById('slab_1').innerHTML = '<span>' + S1 + '</span>';
        document.getElementById('slab_2').innerHTML = '<span>' + S2 + '</span>';
        document.getElementById('slab_3').innerHTML = '<span>' + S3 + '</span>';
        document.getElementById('slab_4').innerHTML = '<span>' + S4 + '</span>';
        document.getElementById('slab_5').innerHTML = '<span>' + S5 + '</span>';
        document.getElementById('slab_6').innerHTML = '<span>' + S6 + '</span>';
        document.getElementById('totalTaxAmt').innerHTML = '<span> Rs. ' + totalTax + ' /- </span>';
    }
});