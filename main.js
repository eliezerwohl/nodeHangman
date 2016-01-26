var Word = require("./word.js");  
var prompt = require('prompt');

var game = {
  wordbank : ["motorhead", "sabbath", "negative", "scratch", "antidisestablishmentarianism"],
  guessesRemaining : 10,
  currentWord : null,
  startGame : function(wrd){
    this.currentWord = new Word([Math.floor(Math.random() * this.wordbank.length)])
    this.currentWord.getLets();
    this.keepPromptingUser();
  },
  keepPromptingUser : function(){
    var self = this;
    prompt.start();
    prompt.get(['Guess letter friendo!'], function (err, result) {  
      // friendo is a homestarrunner refrence
      console.log("The Letter or space you guessed is" + result.guessLetter);
      var findHowManyOfUserGuess = currentWrd.checkIfLetterFound(result.guessLetter);
      if (findHowManyOfUserGuess === 0){
        console.log("I guess'you gusses wrong!'")  
        // assignment called for gusses wrong. i got creative
        guessesRemaining -= 1
      }
      else{
        console.log("you guessed correctly!  here's a gold star!")
        if (currentWrd.didWeFindTheWord() = true){
          console.log("you won the game! also, this game works!")
          return true
        }
      }
    });
    console.log("guessing remaining" + game.guessesRemaining.val)
    console.log(wordRender(currentWrd))
    if ((game.guessesRemaining > 0) && (currentWrd.found === false)){
        keepPromptingUser();
    }
    else if (guessesRemaining === 0){
      console.log("game over bruh");
      console.log(this.currentWord);
    }
    else{
      console.log(wordRender(currentWrd))
    }
  },   
}  //end start
game.startGame()

