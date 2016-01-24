var Letter = require("./letter")
var something = new Word("apple");
var somethingElse = something.checkIfLetterFound("p");
console.log("something else" + somethingElse);  
function Word(wrd){
  this.word = wrd;
  this.lets = [];
  this.found = false;
  this.getLets = function(){
    for (var i = 0; i < this.word.length; i++) {
      var letter = this.word[i];
      this.lets.push(letter)
    }
  }
  this.checkIfLetterFound = function(guessLetter){
    console.log("guess letter" + guessLetter)
    console.log(new Letter(guessLetter))
    var guessedLetter = new Letter(guessLetter);
    this.lets.push(guessedLetter);
    // return "hey there in quotes";
    var whatToReturn = 0;
    for (var i = 0; i < this.lets.length; i++) {
      if (this.lets[i].charac === guessLetter)  {
        console.log("match")
        appear = true;
        whatToReturn += 1;
        return checkIfLetterFound
      }  
    };
  }
}

module.exports = Word;