
Chatbot = require('./Chatbot');
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('You ==> ');
rl.prompt();
rl.on('line', function(message) {
    console.log('Bot ==> '+ Chatbot.ChatbotReply(message))
    rl.prompt();
}).on('close',function(){
    process.exit(0);
});




/*
function PlaceOrder(OrderNumber)
{

console.log('Order number %s is placed', OrderNumber);
ProcessOrder(function(){console.log('now processing the order')});
};

function ProcessOrder(callback)
{
	// assuming that there is a process here taking 5 seconds to be done.
	setTimeout(callback,5000);
};



PlaceOrder(1)
PlaceOrder(2)
PlaceOrder(3)
PlaceOrder(4)
PlaceOrder(5)
PlaceOrder(6)
PlaceOrder(7)
PlaceOrder(8)
*/