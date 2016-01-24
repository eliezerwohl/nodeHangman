var Letter = require("./letter")
word("poop");
checkIfLetterFound("p")
function word(wrd){
  this.word = wrd;
  this.lets = [];
  this.found = false;
  console.log()
  this.getLets = function(){
    for (var i = 0; i < this.word.length; i++) {
      var letter = this.word[i];
      this.lets.push(letter)
    };
   
  }
  this.checkIfLetterFound = function(guessLetter){
    var whatToReturn = 0;
    for (var i = 0; i < this.lets.length; i++) {
      if (this.lets[i] = Letter.charac)  {
        
      }
    };
  }

}