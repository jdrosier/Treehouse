var view = {
  displayMessage: function(msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;    
  },
  displayHit: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function(location) {
    var cell = document.getElementById(location);   
    cell.setAttribute("class", "miss");   
  }
};

//view.displayMiss("00");
//view.displayHit("34");
//view.displayMiss("55");
//view.displayHit("12");
//view.displayMiss("25");
//view.displayHit("26");  
//view.dispayMessage("Tap Tap, is this thing on?");

//var ships2 = ships[1];
//var locations = ships[1].locations[2];
//console.log("Location is " + locations);

//var ship3 = ships[2];
//var hits = ship3.hits;
//if (hits[2] === "hit") {
  //  console.log("Good hit!");
//}

var model = {
  boardsize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,
  ships: [{
    locations: ["10", "20", "30"],
    hits: ["", "", ""]
  },
  {
    locations: ["32", "33", "34"],
    hits: ["", "", ""]
  },
  {
    locations: ["63", "64", "65"],
    hits: ["", "", ""]
  }],
  fire: function (guess)  {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);
        if (index >= 0) {
          ship.hits[index] = "hit";
          view.displayHit(guess);
          view.displayMessage("HIT!");
          if (this.isSunk(ship)) {
            view.displayMessage("You sank my battleship!");
            this.shipsSunk++;
          }
          return true;
        }
      }
      view.displayMiss(guess);
      view.displayMessage("You missed!");
      return false;
    },
  isSunk: function(ship) {
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  }
};

//model.fire("10");
//model.fire("36");
//model.fire("64");
//model.fire("42");
//model.fire("63");
//model.fire("33");
//model.fire("14");
//model.fire("65");
//model.fire("22");
//model.fire("30");

var controller = {
  guesses: 0,
  processGuess: function(guess) {
    
  }
};

function parseGuess(guess) {
  var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
  
  if (guess === null || guess.length !== 2) {
    alert("Ooops, please enter a letter and a number on the board.");
  } else {
    var firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);
    var column = guess.charAt(1);
    
    if (isNaN(row) || isNaN(column)) {
      alert("Ooops, that isn't on the board.");
    } else if (row < 0 || row >= model.boardsize ||column < 0 || column >= model.boardsize) {
      alert("Oops, that's off the board.");
    } else {
      return row + column;
    }
  }
  return null;
}

//console.log(parseGuess("A0"));
//console.log(parseGuess("B6"));
//console.log(parseGuess("G3"));
//console.log(parseGuess("H0"));
//console.log(parseGuess("A7"));

















    
    