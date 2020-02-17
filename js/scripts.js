// Business Logic --------------

let boardCounter = 0;

const board = {
  one: "",
  two: "",
  three: "",
  four: "",
  five: "",
  six: "",
  seven: "",
  eight: "",
  nine: ""
}

let winner = "";

function winCondition(board) {
  if ((board.one === board.two) && (board.two === board.three)) { winner = board.one; }
  if ((board.four === board.five) && (board.five === board.six)) { winner = board.four; }
  if ((board.seven === board.eight) && (board.eight === board.nine)) { winner = board.seven; }
  if ((board.one === board.four) && (board.four === board.seven)) { winner = board.one; }
  if ((board.two === board.five) && (board.five === board.eight)) { winner = board.two; }
  if ((board.three === board.six) && (board.six === board.nine)) { winner = board.three; }
  if ((board.one === board.five) && (board.five === board.nine)) { winner = board.one; }
  if ((board.three === board.five) && (board.five === board.seven)) { winner = board.three; }
}

// Player 1 = X; Player 2 = O;
let player = 0;

// UI logic ---------------------
$(document).ready(function() {
  $("#player1").toggleClass('active-player');

  $(".square").click(function(e) {
    if (winner) return 
    let clickedItem = this.id;    
    
    if (player) {
      $(this).text("X");
      if (this.id === "one") {
        $(this).addClass(".green");
      }
      board[clickedItem] = "X";
      player = 0;
    } else {
      $(this).text("O");
      board[clickedItem] = "O";
      player = 1;
    }
    
    // Check for winner; return win message if true;
    winCondition(board);
    if (winner) {
      $("#result-div").append(`${winner} wins!`);
    }
   
    // Toggle players
    $("#player1").toggleClass('active-player');
    $("#player2").toggleClass('active-player');
    });

 
}); 
