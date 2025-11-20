var emailError = document.getElementById("emailError");
var phoneError = document.getElementById("phoneError");
var messageError = document.getElementById("messageError");
var submitError = document.getElementById('submitError');

function validateName() {
  const username = document.getElementById("contactName").value;
  var nameError = document.getElementById("nameError");
  if (username.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  } else if (!username.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)) {
    nameError.innerHTML = "Please enter Full name";

    return false;
  } else {
    nameError.innerHTML = '<i class="fa fa-check-circle"></i>';
  }
}

function validatePhone() {
  var phone = document.getElementById("contactPhone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "phone no required";
    return false;
  }

  if (phone.length !== 10) {
    phoneError.innerHTML = "phone should be 10 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "phone should be number only!";
    return false;
  }
  phoneError.innerHTML = '<i class="fa fa-check-circle"></i>';
}

function validateEmail() {
  var email = document.getElementById("contactEmail").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Unavailable email";
    return false;
  }
  emailError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}

function validateMessage() {
  var message = document.getElementById("contactMessage").value;
  var required = 30;
  var left = required - message.length;

  if (message.length == 0) {
    messageError.innerHTML = "Message is required";
    return false;
  }
  if (left > 0) {
    messageError.innerHTML = left + " more character" + (left === 1 ? "" : "s") + " required";
    return false;
  }

  messageError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || ! validatePhone() || !validateMessage()){
        submitError.innerHTML = 'Fix the above errors';
        return false;
    }
    
    submitError.innerHTML = 'Submited successfully';
    return true;
}
