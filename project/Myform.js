// form validation

username = document.getElementById("userinput");
email = document.getElementById("inputemail");
password = document.getElementById("inputpassword");
let validname = false;
let validemail = false;
let validpassword = false;

name_valiadte = () => {
	let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
	if (regex.test(username.value)) {
		return validname = true;
	} else {
		let error = "name is required";
		return document.getElementById("usererror").innerText = error;
	}
};

email_validate = () => {
	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)$/;
	if (regex.test(email.value)) {
		validemail = true;
	} else {
		let error1 = "Email is invalid";
		document.getElementById("emailerror").innerText = error1;
	}
};

password_validate = () => {
	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)$/;
	if (regex.test(password.value)) {
		validpassword = true;
	} else {
		let error2 = "Password is invalid";
		document.getElementById("passworderror").innerText = error2;
	}
};

Validate_submit = () => {
	name_valiadte();
    email_validate();
    password_validate();

	if (validname && validemail && validpassword) {
		let success = `<p class="text-success h3 bg-dark">You have successfully submitted the form</p>`;
		document.getElementById("success").innerHTML = success;
	} else {
		let failure = `<p class="text-danger h3 bg-dark p-5">form submission failed </p>`;
		document.getElementById("success").innerHTML = failure;
	}
};
