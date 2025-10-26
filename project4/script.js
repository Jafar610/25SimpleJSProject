const messageInput = document.getElementById("message-input");

function getMessage() {
  document.getElementById("getMessage-output").innerHTML = messageInput.value;

  messageInput.value = '';
}
