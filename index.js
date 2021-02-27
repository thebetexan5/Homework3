// Handler for generate password button
const handleGeneratePassword = () => {
  document.getElementById("password").innerHTML = generatePassword();
};

// Change button status based on validity
const updateButtonStatus = () => {
  const generateButton = document.getElementById("generate");
  generateButton.disabled = !passwordConfig.checkValidity();
};

// Initialize all checkboxes
const lowerCharsCheckbox = document.querySelector('input[id="lowerChars"]');
const upperCharsCheckbox = document.querySelector('input[id="upperChars"]');
const numericCharsCheckbox = document.querySelector('input[id="numericChars"]');
const specialCharsCheckbox = document.querySelector('input[id="specialChars"]');

// Handler for including lower case collection
lowerCharsCheckbox.addEventListener("change", () => {
  lowerCharsCheckbox.checked
    ? (lowerChars.selected = true)
    : (lowerChars.selected = false);
  updateButtonStatus();
});

// Handler for including upper case collection
upperCharsCheckbox.addEventListener("change", () => {
  upperCharsCheckbox.checked
    ? (upperChars.selected = true)
    : (upperChars.selected = false);
  updateButtonStatus();
});

// Handler for including numbers collection
numericCharsCheckbox.addEventListener("change", () => {
  numericCharsCheckbox.checked
    ? (numericChars.selected = true)
    : (numericChars.selected = false);
  updateButtonStatus();
});

// Handler for including special characters collection
specialCharsCheckbox.addEventListener("change", () => {
  specialCharsCheckbox.checked
    ? (specialChars.selected = true)
    : (specialChars.selected = false);
  updateButtonStatus();
});

// Handler for range slider
const range = document.getElementById("passwordLength");
const lengthOutput = document.getElementById("lengthValue");
lengthOutput.innerHTML = range.value; // Display range value

range.oninput = function () {
  lengthOutput.innerHTML = this.value;
  passwordConfig.passwordLength = this.value;
};