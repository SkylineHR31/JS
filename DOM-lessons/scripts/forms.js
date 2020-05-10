function Form(insertPlace, classFormName) {
    this.insertPlace = insertPlace;
    this.classFormName = classFormName;
    regExpEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    regExpPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
}

Form.prototype.render = function() {
    const formContainer = document.querySelector(this.insertPlace);
    const form = document.createElement('form');

    const submitButton = document.createElement('input');
    submitButton.type = "submit";
    submitButton.value = "Let's rock this form";

    const emailInput = document.createElement('input');
    emailInput.type = "text";
    emailInput.placeholder = "Your email";

    const passInput = document.createElement('input');
    passInput.type = "password";
    passInput.placeholder = "Your password";

    form.append(emailInput);
    form.append(passInput);
    form.append(submitButton);


    form.className = this.classFormName;
    formContainer.append(form);

    console.dir(emailInput);

    this.validation();

    return formContainer;
}

Form.prototype.regExp = function() {
    const emailInput = document.querySelector('[type="text"]');
    const passInput = document.querySelector('[type="password"]');
    return regExpEmail.test(emailInput.value) && regExpPassword.test(passInput.value);
}

Form.prototype.validation = function() {
    const emailInput = document.querySelector('[type="text"]');
    const passInput = document.querySelector('[type="password"]');

    document.querySelector("." + this.classFormName).addEventListener(
        'submit', (event) => {
            event.preventDefault();

            let userData = {};

            if (this.regExp()) {
                if (this.regExp() && emailInput.classList.contains("invalid") && passInput.classList.contains("invalid")) {
                    emailInput.classList.remove("invalid");
                    passInput.classList.remove("invalid");
                }
                userData.email = emailInput.value;
                userData.password = passInput.value;

                console.log(JSON.stringify(userData, null, '\t'));
            } else {
                emailInput.classList.add("invalid");
                passInput.classList.add("invalid");
            }
        }  
    );
}

const form = new Form(".container", "submit-form");

form.render();