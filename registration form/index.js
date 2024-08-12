document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signUp");
  // const togglePassword = document.getElementById("togglePassword");
  const password = document.getElementById("togglePassword");
  const userName = document.getElementById("username");
  const email = document.getElementById("email");

  // togglePassword.addEventListener("click", () => {
  //   const type = password.type === "password" ? "text" : "password";
  //   password.type = type;
  //   togglePassword.classList.toggle("ri-eye-line");
  //   togglePassword.classList.toggle("ri-eye-off-line");
  // });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(
        `Registration successful!\n\nUsername: ${userName.value}\nEmail: ${email.value}`
      );
    }
  });

  function validateForm() {
    let isValid = true;
    if (userName.value.trim() === "") {
      setError(userName, "Username is required");
      isValid = false;
    } else {
      clearError(userName);
    }

    if (email.value.trim() === "") {
      setError(email, "Email is required");
      isValid = false;
    } else if (!validateEmail(email.value)) {
      setError(email, "Enter a valid email");
      isValid = false;
    } else {
      clearError(email);
    }

    if (password.value.trim() === "") {
      setError(password, "Password is required");
      isValid = false;
    } else if (password.value.length < 6) {
      setError(password, "Password must be at least 6 characters");
      isValid = false;
    } else {
      clearError(password);
    }

    return isValid;
  }     

  function setError(input, message) {
    const formGroup = input.closest(".form-field");
    const errorDisplay = formGroup.querySelector(".error-message");
    if (errorDisplay) {
      errorDisplay.textContent = message;
      errorDisplay.style.display = "block";
    }
  }

  function clearError(input) {
    const formGroup = input.closest(".form-field");
    const errorDisplay = formGroup.querySelector(".error-message");
    if (errorDisplay) {
      errorDisplay.textContent = "";
      errorDisplay.style.display = "none";
    }
  }

  function validateEmail(email) {
    //password should be 8 characters long along with one special character, one number and one capital letter
    //use regex for password validation

    // ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$
    // ^(?=.*\d) - should contain atleast one digit
    // (?=.*[a-z]) - should contain atleast one lower case
    // (?=.*[A-Z]) - should contain atleast one upper case
    // (?=.*[a-zA-Z]) - should contain atleast one letter
    // .{8,} - should contain atleast 8 characters
    // $ - end of the string
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }
});