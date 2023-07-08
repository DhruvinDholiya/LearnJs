class validation {
    constructor (n, e, m, c, g, h) {
        this.name = n;
        this.email = e;
        this.mobile = m;
        this.country = c;
        this.gender = g;
        this.hobby = h;
    }

    printErr(id, msg) {
        document.getElementById(id).innerHTML = msg;
    }

    checkValidation() {
        let nameErr = true;
        let emailErr = true;
        let mobileErr = true;
        let countryErr = true;
        let genderErr = true;
        let hobbyErr = true;

        if (this.name === '') {
            this.printErr("nameErr", "Please enter name.");
        } else {
            if (/^[a-zA-Z ]{2,30}$/.test(this.name)) {
                this.printErr("nameErr", "");
                nameErr = false;
            } else {
                this.printErr("nameErr", "Please enter valid name.");
            }
        }

        if (this.email === '') {
            this.printErr("emailErr", "Please enter email.");
        } else {
            if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.email)) {
                this.printErr("emailErr", "");
                emailErr = false;
            } else {
                this.printErr("emailErr", "Please enter valid email address.");
            }
        }

        if (this.mobile === '') {
            this.printErr("mobileErr", "Please enter mobile number.");
        } else {
            if (!isNaN(this.mobile) && this.mobile.length === 10 && !this.mobile.includes(' ')) {
                this.printErr("mobileErr", "");
                mobileErr = false;
            } else {
                this.printErr("mobileErr", "Please enter valid mobile number.");
            }
        }

        if (this.country === '0') {
            this.printErr("countryErr", "Please select country.");
        } else {
            this.printErr("countryErr", "");
            countryErr = false;
        }

        if (this.gender === '') {
            this.printErr("genderErr", "Please choose gender.");
        } else {
            this.printErr("genderErr", "");
            genderErr = false;
        }

        let checkedHobbies = [];
        for (let i = 0; i < this.hobby.length; i++) {
            if (this.hobby[i].checked) {
                checkedHobbies.push(this.hobby[i].value);
            }
        }
        if (checkedHobbies.length < 2) {
            this.printErr("hobbyErr", "Please select atleast 2 hobbies.");
        } else {
            this.printErr("hobbyErr", "");
            hobbyErr = false;
        }

        if (nameErr || emailErr || mobileErr || countryErr || genderErr || hobbyErr) {
            return false;
        } else {
            return true;
        }
    }
}


function validateForm () {
    let nameVal = contactForm.name.value;
    let emailVal = contactForm.email.value;
    let mobileVal = contactForm.mobile.value;
    let countryVal = contactForm.country.value;
    let genderVal = contactForm.gender.value;
    let hobbyVal = contactForm.hobbies;

    let formValidation = new validation(nameVal, emailVal, mobileVal, countryVal, genderVal, hobbyVal);
    
    let ans = formValidation.checkValidation();
    if(ans) {
        return true;
    } else {
        return false;
    }

}