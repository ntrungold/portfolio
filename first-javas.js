var opening = prompt('Are you ready to play fmaily feud?');
var steveIntro;
steveIntro = "Hello everyone I'm Steve Harvey, let's play Family Feud!";
var team1 = {//intitalizing Team 1 
    name= prompt('What is your team name Team 1?'),
    score = 0,
}
var team2 = {//intitalizing Team 2
    name= prompt('What is your team name Team 1?'),
    score = 0,
}
var winner;
//setting up a winner
if (team1.score > 300){
    winner = "Team 1"
}
else if (team2.score>300{
    winner = "Team 2"
}
else{
    winner = "still playing"
}

//adding a header 
var pageHeader = document.getElementById('page-header');
