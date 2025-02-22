document.getElementById("signUpForm").addEventListener("submit", function (e) {
  e.preventDefault();


   let isValid = true;

   const firstName = document.getElementById("first-name");
   const lastName = document.getElementById("last-name");
   const email = document.getElementById("email");
   const password = document.getElementById("password");
   const confirmPassword = document.getElementById("confirm-password");

  
  
  const firstNameError = document.getElementById("first-name-error");
  const lastNameError = document.getElementById("last-name-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const confirmPasswordError = document.getElementById(
    "confirm-password-error"
  );


 [
   firstNameError,
   lastNameError,
   emailError,
   passwordError,
   confirmPasswordError,
 ].forEach((error) => {
   error.style.display = "none";
 });
 
  
  
 if (firstName.value.trim() === "") {
   firstNameError.textContent = "*required.";
   firstNameError.style.display = "block";
   isValid = false;
 }

  if (lastName.value.trim() === "") {
    lastNameError.textContent = "*required.";
    lastNameError.style.display = "block";
    isValid = false;
  }


   if (email.value.trim() === "") {
     emailError.textContent = "*required.";
     emailError.style.display = "block";
     isValid = false;

   } else if (!/\S+@\S+\.\S+/.test(email.value)) {
     emailError.textContent = "*Please enter a valid email address.";
     emailError.style.display = "block";
     isValid = false;
  }
  //هون كلمة السر بلا حول
   if (password.value.trim() === "") {
     passwordError.textContent = "*required.";
     passwordError.style.display = "block";
     isValid = false;
  }
  
  if (confirmPassword.value.trim() === "") {
    confirmPasswordError.textContent = "*Please confirm your password.";
    confirmPasswordError.style.display = "block";
    isValid = false;
  } else if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = "*Passwords do not match.";
    confirmPasswordError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    window.location.href = '2.html';
  
  }
});
