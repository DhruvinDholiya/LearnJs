document.getElementById("submitBtn").addEventListener('click', function () {
    let heightCM = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);

    let heightMeter = (heightCM / 100);
    let heightData = heightMeter * heightMeter;

    let BMI_Ans = (weight / heightData).toFixed(2);

    document.getElementById("BMI_Ans").innerHTML = BMI_Ans;

    if (BMI_Ans < 18.6) {
        document.getElementById("guideAns").innerHTML = 'Under Weight';
    } else if ((BMI_Ans >= 18.6) && (BMI_Ans <= 24.9)) {
        document.getElementById("guideAns").innerHTML = 'Normal Range';
    } else if (BMI_Ans > 24.9) {
        document.getElementById("guideAns").innerHTML = 'Over Weight';
    }
});