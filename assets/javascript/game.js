var gameLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var iWin = 0;
var iLose = 0;
var guessLeft = 10;
var guessLetters = []; 

document.onkeyup = function(event) {
  var iGuess = event.key; 
  guessLetters.push(iGuess);    
  var gameAnswer = gameLetters[Math.floor(Math.random() * gameLetters.length)];
  
    if (iGuess === gameAnswer) {
      iWin++;
      guessLeft = 9;
    }
    
    else {
      guessLeft--;
    }
    
    if (guessLeft === 0){
      iLose++;
      guessLeft = 9;
    }

    var html = "<p>Guess what letter I'm thinking of</p>" + 
    "<p>Wins: " + iWin + "</p>" + "<p>Loses: "+ iLose + "</p>" + "<p>Guesses Left: " + guessLeft + "</p>" + "<p>Your Guesses so far: " +  guessLetters.join(', ') + "</p>"; 
    
    document.getElementById("psychic2").innerHTML = html;
  }