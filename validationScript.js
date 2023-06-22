// JavaScript code for form validation
const form = document.getElementById('myForm');
const inputField = document.getElementById('inputField');
// Prevent form from submitting
form.addEventListener('submit', function (e) {
  e.preventDefault();
});
inputField.addEventListener('change', function () {
// Retrieve the input field value
let inputValue = inputField.value;
// Regular expression pattern for alphanumeric input
regex = /^[a-zA-Z0-9]*$/;
  // Check if the input value matches the pattern
    if (regex.test(inputValue)) {
      // Valid input: display confirmation and submit the form
      alert('Form submitted successfully.');
      form.submit();
      // Invalid input: display error message
    } else {
       alert('Error! Illegal characters detected!');
    }
});
