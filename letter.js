
function Letter(let){
  console.log("function is running")
  this.charac = let;
  this.appear = false;
  this.letterRender = function(){
    if (this.appear === false){ 
      return "__"
    }
    else if (this.appear === true){
      console.log("no charc")
      return this.charac;
    }
    // else{
    //   console.log("else")
    // }
  }
}
module.exports = Letter;

// // PartyBus.js

// var Passenger = require("./passenger.js");

// function PartyBus(driverName, startLocation, destination){
//     this.driverName = driverName;
//     this.startLocation = startLocation;
//     this.destination = destination;
//     this.passengers = [];
//     this.addPassenger = function(name, gender, age){
//         var passenger = new Passenger(name, gender, age);
//         this.passengers.push(passenger);
//     }
//      this.howManyPassengers = function(){
//         if(this.passengers.length > 0) {
//             console.log("We've arrived at " + destination + " from " + startLocation);
            
//             var passengerNames = [];

//             for (var i = 0; i < this.passengers.length; i++){
//                 passengerNames.push(this.passengers[i].name)
//             }

//             console.log(" and " + passengerNames.join(", ") + " are on board");
//         } else {
//             console.log("No passengers on bus");                
//         }
        
//     }
// }

// module.exports = PartyBus;