const submitButton = document.querySelector('button');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');

submitButton.onclick = function() {
  if (emailInput.value != '' && passwordInput.value != ''){
    alert('Thanks for submitting!');
  }
  else {
    alert('Please enter an email and password before submitting.');
  }
  
}