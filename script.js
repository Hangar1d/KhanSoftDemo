function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  if (userInput.trim() === "") return;

  appendMessage(userInput, "user-message");
  document.getElementById("user-input").value = "";

  setTimeout(function () {
    generateBotResponse(userInput);
  }, 500);
}

function appendMessage(message, className) {
  var chatBody = document.getElementById("chat-body");
  var messageElement = document.createElement("div");
  messageElement.className = "message " + className;
  messageElement.textContent = message;
  chatBody.appendChild(messageElement);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function generateBotResponse(userInput) {
  var response = "";

  if (userInput.toLowerCase().includes("hello")) {
    response = "Hi there! How can I help you today?";
  } else if (userInput.toLowerCase().includes("services")) {
    response =
      "We offer a variety of software development services including web development, mobile app development, and more!";
  } else if (userInput.toLowerCase().includes("contact")) {
    response = "You can contact us at behangarid1@gmail.com";
  } else if (userInput.toLowerCase().includes("hi")) {
    response = "Hi there! How can I help you today?";
  } else {
    response =
      "I'm sorry, I can't answer a question except 'hi', 'hello', 'services', 'contact'.";
  }

  appendMessage(response, "bot-message");
}

function toggleChatbot() {
  var chatbotContainer = document.getElementById("chatbot-container");
  if (
    chatbotContainer.style.display === "none" ||
    chatbotContainer.style.display === ""
  ) {
    chatbotContainer.style.display = "flex";
  } else {
    chatbotContainer.style.display = "none";
  }
}
