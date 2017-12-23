module.exports = 
{

	ChatbotReply:function(message)
	{
		// Bot's data
		this.Bot_Age = 22;
		this.Bot_Name = "Abdelrahman Radwan";
		this.Bot_University = "Ain Shams University";
		// User data
		this.User_Age;
		this.User_Name;
		this.User_University;
		// Message processing... 
		message= message.toLowerCase()

		if(message.indexOf("hi") > -1 || message.indexOf("hello") > -1 || message.indexOf("welcome") > -1 )
		{
			return "Hi!";
		} 
		else if(message.indexOf("age") > -1 && message.indexOf("your"))
		{
			return "I'm " + this.Bot_Age;
		}
		return "Sorry, I didn't get it :( ";
	}


};