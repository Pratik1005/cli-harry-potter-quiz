var readlineSync = require('readline-sync');

var welcomeUser = readlineSync.question("What is your Name ");
console.log("Welcome " + welcomeUser + " to Harry Potter Quiz");
var score = 0;
function play(question, answer){
  var userIp = readlineSync.question(question);

  if(userIp.toUpperCase() === answer.toUpperCase()){
    score++;
    console.log("You are right!");
  } else {
    console.log("You are wrong!");
  }

  console.log("Current Score: "+ score);
    console.log("--------------------");
}

var highScore = [
  {
    name: "Pratik",
    score: 5
  },
  {
    name: "Ayush",
    score: 4
  }

]

var allQuestions = [
  {
    question: `Who gave Harry a owl on his birthday?
    a: Hagrid 
    b: Ron 
    c: Hermione
    `,
    answer: "a"
  },
  {
    question: `Who gave Nimbus 2000 to Harry before his first Quidditch match? 
    a: Albus Dumbledore 
    b: Minerva McGonagall 
    c: Severus Snape
    `,
    answer: "b"
  },
  {
    question: `From where did Fred and George steal Marauder's Map?
    a: Gryffindor common room
    b: Library
    c: Filch's office
    `,
    answer: "c"
  },
  {
    question: `Which house did sorting hat recommended first to Harry Potter?
    a: Gryffindor
    b: Slytherin
    c: Ravenclaw
    `,
    answer: "b"
  },
  {
    question: `Total how many Horcruxes did Voldemort created?
    a: 5
    b: 7
    c: 9
    `,
    answer: "b"
  }
]

for(var i=0; i<allQuestions.length; i++){
  play(allQuestions[i].question, allQuestions[i].answer);
}
console.log("==========HIGH SCORES===========");
for(var i=0; i<highScore.length; i++){
  console.log(highScore[i].name +" : "+highScore[i].score);
}