// form validation

UserName = document.getElementById("inputUserName");
Password = document.getElementById("inputPassword4");
email = document.getElementById("inputEmail4");
Mob = document.getElementById("inputMob");
address=document.getElementById("inputAddress")
state=document.getElementById("inputState");

let validUserName = false;
let validPassword = false;
let validemail = false;
let validMob = false;

// $("#failure").show();
// $("#success").show();

UserName.addEventListener("blur", () => {
	//validate  name

	let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
	let str = UserName.value;

	if (regex.test(str)) {
		UserName.classList.remove("is-invalid");
		validUserName = true;
	} else {
		UserName.classList.add("is-invalid");
		validUserName = false;
	}
});

Password.addEventListener("blur", () => {
	//validate  password

	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)$/;
	let str = Password.value;

	if (regex.test(str)) {
		Password.classList.remove("is-invalid");
		validPassword = true;
	} else {
		Password.classList.add("is-invalid");
		validPassword = false;
	}
});

email.addEventListener("blur", () => {
	//validate  email

	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)$/;
	let str = email.value;

	if (regex.test(str)) {
		email.classList.remove("is-invalid");
		validemail = true;
	} else {
		email.classList.add("is-invalid");
		validemail = false;
	}
});

Mob.addEventListener("blur", () => {
	//validate  mob no

	let regex = /^([0-9]){10}$/;
	let str = Mob.value;

	if (regex.test(str)) {
		Mob.classList.remove("is-invalid");
		validMob = true;
	} else {
		Mob.classList.add("is-invalid");
		validMob = false;
	}
});

submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
	// submit form
	e.preventDefault();
	let success = document.getElementById("success");
	let failure = document.getElementById("failure");

	if (validUserName && validemail && validPassword && validMob) {
		success.classList.add("show");
		failure.classList.remove("show");
		// $("#failure").hide();
		// $("#success").show();
        let data=[{'UserName':UserName.value},{'email':email.value},{'password':Password.value},{'mobile no':Mob.value},{'address':address.value},{'state':state.value}];
        localStorage.setItem('data gathered',JSON.stringify(data));
        console.log(JSON.parse(localStorage.getItem('data gathered')));
	} else {
		failure.classList.add("show");
		success.classList.remove("show");
		// $("#failure").show();
		// $("#success").hide();
	}
});
