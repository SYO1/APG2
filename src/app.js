
//import {BOT_USERNAME, OAUTH_TOKEN, CHANNAL_NAME} from './constants';
//const tmi = require('tmi.js');


//function runbotTwtich(){
	const option = {
		options: { debug: true },
		connection: {
			reconnect: true,
			secure: true
		},
		identity: {
			username: 'syo117',
			password: 'oauth:ccakugx5o3krbn0f7i2bgj7ymk4laz'
		},
		channels: [ 'syo117' ]
	}
	
	const client = new tmi.Client(option);
	
	client.connect();
	
	let p1Click = false;
	let p2Click = false;
	let p3Click = false;
	let p4Click = false;
	let p5Click = false;
	//let p6Click = false;
	let rand = Math.floor(Math.random()*3);


	client.on('message', (channel, tags, message, self) => {
		// Ignore echoed messages.
		if(self) return;
		
		if(p1Click === true)
		{
			//client.say(channel, `@${tags.username}, cool`);
			client.say(channel, `@${tags.username}, Help`);
		}
		else if (p2Click === true)
		{
			switch(rand)
			{
				case 0:
					client.say(channel, `@${tags.username}, Hello everyone!`);
					break;
				case 1:
					client.say(channel, `@${tags.username}, Nice to meet you!`);
					break;
				case 2:
					client.say(channel, `@${tags.username}, Let's play the game!`);
					break;
				default:
					client.say(channel, `@${tags.username}, Hello.`);
					break;
			}
			//client.say(channel, `@${tags.username}, Confuse`);
			//client.say(channel, `@${tags.username}, good`);
		}
		else if (p3Click === true)
		{
			client.say(channel, `@${tags.username}, Tease`);
			//client.say(channel, `@${tags.username}, ok`);
		}
		else if (p4Click === true)
		{
			client.say(channel, `@${tags.username}, Co-h`);
		}
		else if (p5Click === true)
		{
			client.say(channel, `@${tags.username}, Co-t`);
		}
		//else if (p6Click === true)
		//{
		//	client.say(channel, `@${tags.username}, Co-c`);
		//}
		//else if(message.toLowerCase() === '!hello') {
			// "@alca, heya!"

			//console.log(channel, tags, message, self);
			
			
		//}
	});

    function sentMessageBotP1(){
        var name = document.getElementById('input-text-twitch').value;
        if(name === "")
        {
            alert("Please type your full name");
        }
        else{
			//client.say(`#syo117`, `@${name}, cool`);
            client.say(`#syo117`, `@${name}, Help`);
        }
        
    }
	function sentMessageBotP2(){
		var name = document.getElementById('input-text-twitch').value;

		if(name === "")
        {
			alert("Please type your full name");

		}
		else{
			switch(rand)
			{
				case 0:
					client.say(`#syo117`, `@${name}, Hello everyone!`);
					break;
				case 1:
					client.say(`#syo117`, `@${name}, Nice to meet you!`);
					break;
				case 2:
					client.say(`#syo117`, `@${name}, Let's play the game!`);
					break;
				default:
					client.say(`#syo117`, `@${name}, Hello.`);
					break;
			}
			//client.say(`#syo117`, `@${name}, Confuse`);
			//client.say(`#syo117`, `@${name}, good`);
		}
	}
	function sentMessageBotP3(){
		var name = document.getElementById('input-text-twitch').value;
	
		if(name === "")
		{
			alert("Please type your full name");
	
		}
		else{
			client.say(`#syo117`, `@${name}, Tease`);
			//client.say(`#syo117`, `@${name}, ok`);
		}
    }

	function sentMessageBotP4(){
		var name = document.getElementById('input-text-twitch').value;
	
		if(name === "")
		{
			alert("Please type your full name");
	
		}
		else{
			client.say(`#syo117`, `@${name}, Co-h`);
		}
	}

	function sentMessageBotP5(){
		var name = document.getElementById('input-text-twitch').value;
	
		if(name === "")
		{
			alert("Please type your full name");
	
		}
		else{
			client.say(`#syo117`, `@${name}, Co-t`);
		}
	}

	//function sentMessageBotP6(){
	//	var name = document.getElementById('input-text-twitch').value;
	//
	//	if(name === "")
	//	{
	//		alert("Please type your full name");
	//
	//	}
	//	else{
	//		client.say(`#syo117`, `@${name}, Co-c`);
	//	}
	//}

//}



		
