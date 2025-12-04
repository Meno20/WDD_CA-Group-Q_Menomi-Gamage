//JS FOR WEBSITE


//HOME AND ABOUT PAGE JS_ HANDE EDA OZDEMIR
const currentPage = window.location.pathname.split('/').pop();/*detects which page does user currently use*/

if (currentPage=="home_HandeEdaOzdemir.html"){
	let confirmMessage=confirm("Want to know more about Life Under Water?","You won't be regretting!")
	if(confirmMessage==true){
		i=0
		promptMessage=prompt("What do you want to learn about?","About, Gallery, NASA, Threats, What can we do?")
		while(i==0){
				
			if (promptMessage!="About"&&promptMessage!="Gallery"&&promptMessage!="NASA"&&promptMessage!="Threats"&&promptMessage!="What can we do?"){
					alert("We dont have that content.")
					promptMessage=prompt("What do you want to learn about?","About, Gallery, NASA, Threats, What can we do?")
				}
			else{
				alert("You can find "+promptMessage+" in the menu. Have fun!!")
				i=1
			}
		}
	}
	if(confirmMessage==false){
		promptMessage=prompt("Why you don't want to learn about it?","Because...")
		alert("Don't worry. Learning new things won't make any harm! So let's go!!")
	}
		
}

// Threats and What we can do page JS -- MENOMI GAMAGE -- 
if (currentPage=="threats_MenomiGamage.html"){
	const title = document.getElementById("changing-heading"); //identify the targeted element by the id
//declare a constant called title
	title.addEventListener("mouseover", () => {//when mouse hover over title the text is changed 
		title.textContent = "Discover the main threats affecting our Oceans";
	});
	title.addEventListener("mouseout", () => {// change text back to original when not hovering
		title.textContent = "Beneath the Surface, Above the Crisis";
  });
	
}
 
// FORM VALIDATION IN WHAT WE CAN DO PAGE -- MG--  
if (currentPage=="WhatWeCanDo_MenomiGamage.html"){
	
		// Validate a single field
	function validateField(field, errorElement, condition, message) {
		if (condition) {
			errorElement.textContent = message;
			field.classList.add("invalid");
			field.classList.remove("valid");
			return false;
		} else {
			errorElement.textContent = "";
			field.classList.add("valid");
			field.classList.remove("invalid");
			return true;
		}
	}
// source:https://www.geeksforgeeks.org/javascript/form-validation-using-javascript/
	function validateForm() {
		const firstName = document.getElementById("fname");
		const lastName = document.getElementById("lname");
		const email = document.getElementById("email");
		const coun = document.getElementById("country");
		const agree = document.getElementById("customCheck1");

		const fnameErr = document.getElementById("fname-error");
		const lnameErr = document.getElementById("lname-error");
		const emailErr = document.getElementById("email-error");
		const counErr = document.getElementById("country-error");
		const agreeErr = document.getElementById("agree-error");

		let isValid = true;

		// Validate all fields for submit
		if (!validateField(firstName, fnameErr, firstName.value.trim().length < 3, "Please enter your name properly.")) isValid = false;

		if (!validateField(lastName, lnameErr, lastName.value.trim().length < 3, "Please enter your last name.")) isValid = false;

		if (!validateField(email, emailErr, (email.value === "" || !email.value.includes("@") || !email.value.includes(".")), "Please enter a valid email.")) isValid = false;

		if (!validateField(coun, counErr, coun.value === "", "Please select a country.")) isValid = false; //not working

		if (!validateField(agree, agreeErr, !agree.checked, "Please agree to the Privacy Policy.")) isValid = false;

		if (isValid) {
			alert("Form submitted successfully!");
			return true; // Allows page to reload
		}
		return false;
	}

	// Real-time validation
	window.onload = function () {
		const firstName = document.getElementById("fname");
		const lastName = document.getElementById("lname");
		const email = document.getElementById("email");
		const coun = document.getElementById("country");
		const agree = document.getElementById("customCheck1");

		firstName.addEventListener("input", function () {
			validateField(firstName, document.getElementById("fname-error"), firstName.value.trim().length < 3, "Please enter your name properly.");
		});

		lastName.addEventListener("input", function () {
			validateField(lastName, document.getElementById("lname-error"), lastName.value.trim().length < 3, "Please enter your last name.");
		});

		email.addEventListener("input", function () {
			validateField(email, document.getElementById("email-error"), (email.value === "" || !email.value.includes("@") || !email.value.includes(".")), "Please enter a valid email.");
		});

		coun.addEventListener("change", function () {
			validateField(coun, document.getElementById("country-error"), coun.value === "", "Please select a country.");
		});

		agree.addEventListener("change", function () {
			validateField(agree, document.getElementById("agree-error"), !agree.checked, "Please agree to the Privacy Policy.");
		});
	};

}
// -- END MENOMI GAMAGE -- 




