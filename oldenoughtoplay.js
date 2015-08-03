<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<script>
		// Check if the user is ready to play!
		confirm("I am ready to play!");

		var age=prompt("What's your age?");

		if(age < 13)
		{
			console.log("allowed to play but you take no responsibility.");
		} 
		else // "otherwise"
		{
			console.log("play on!")
		}
		console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
		console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

		if(userAnswer === 'yes') 
		{
			console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
		}
		else
		{
			console.log("Oh no! Bieber shakes his head and sings 'I    set a pace, so I can race without pacing.'");
		}   
		</script>
	</body>
</html>