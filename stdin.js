Chatbot = require('./Chatbot');
var stdin = process.openStdin();

console.log('Start chatting with your Chatbot ... \n')
stdin.addListener("data", function(message) {
    message = message.toString().trim()
    console.log("You ==> " + message);
    console.log("Bot ==> "+Chatbot.ChatbotReply(message))
  });

