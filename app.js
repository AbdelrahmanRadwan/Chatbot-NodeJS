
Chatbot = require('./Chatbot');
var stdin = process.openStdin();

console.log('Start chatting with your Chatbot ... \n')
stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    console.log("You ==> " + d.toString().trim());
    console.log("Bot ==> "+"asdas")
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