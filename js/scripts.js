// Business Logic --------------

let boardCounter = 0;

let board = {
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

function winCondition(board) {
  if ((board.one) && (board.one === board.two) && (board.two === board.three)) { return board.one; }
  if ((board.four) && (board.four === board.five) && (board.five === board.six)) { return board.four; }
  if ((board.seven) && (board.seven === board.eight) && (board.eight === board.nine)) { return board.seven; }
  if ((board.one) && (board.one === board.four) && (board.four === board.seven)) { return board.one; }
  if ((board.two) && (board.two === board.five) && (board.five === board.eight)) { return board.two; }
  if ((board.three) && (board.three === board.six) && (board.six === board.nine)) { return board.three; }
  if ((board.one) && (board.one === board.five) && (board.five === board.nine)) { return board.one; }
  if ((board.three) && (board.three === board.five) && (board.five === board.seven)) { return board.three; } 
}

// Player 1 = X; Player 2 = O;
let player = 0;

// UI logic ---------------------
$(document).ready(function() {
  $("#player1").toggleClass('active-player');

  $(".square").click(function(e) {
    let winner = winCondition(board);
    console.log(winner);

    if (winner) return 


    let clickedItem = this.id;    
    
    if (player) {
      $(this).text("X");
      if (this.id === "one") {

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



// ask about difference between let and const