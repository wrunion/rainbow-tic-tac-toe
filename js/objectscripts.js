// Business Logic, following Epicodus' instructions to create four different constructor functions: 

function Board() {
    this.one = "";
    this.two = "";
    this.three = "";
    this.four = "";
    this.five = "";
    this.six = "";
    this.seven = "";
    this.eight = "";
    this.nine = "";
  }

function Game() {
  this.board = new Board();
  this.turnCounter = 0;
  this.player = 0;
  this.winCondition = function winCondition(board) {
    if ((board.one) && (board.one === board.two) && (board.two === board.three)) { return board.one; }
    if ((board.four) && (board.four === board.five) && (board.five === board.six)) { return board.four; }
    if ((board.seven) && (board.seven === board.eight) && (board.eight === board.nine)) { return board.seven; }
    if ((board.one) && (board.one === board.four) && (board.four === board.seven)) { return board.one; }
    if ((board.two) && (board.two === board.five) && (board.five === board.eight)) { return board.two; }
    if ((board.three) && (board.three === board.six) && (board.six === board.nine)) { return board.three; }
    if ((board.one) && (board.one === board.five) && (board.five === board.nine)) { return board.one; }
    if ((board.three) && (board.three === board.five) && (board.five === board.seven)) { return board.three; } 
    return "";
  }
}

// function Player() {
//   //know if X or O
//   // know if it's their turn 
//   isTurn = true;
// }

const game = new Game();



// UI Logic ----------------------
$(document).ready(function() {
  $("#player1").toggleClass('active-player');

  $(".square").click(function(e) {
    // console.log(game.board.squares.one);
    let winner = game.winCondition(game.board);
    // Has someone already won? If so, do nothing.
    if ((winner === "X") || (winner === "O")) return; 
  
    // Has someone already played that square? If so, do nothing.
    let textVal = $(this).text();
    if ((textVal === "X") || (textVal === "O")) return;

    // If the click is valid, 
    // Use Vanilla JS to get the ID of the clicked square.
    let clickedItemId = this.id;
    // Check which player is active. Write their marker to the square, then toggle the player counter variable.
    if (game.player) {
        $(this).text("X");
        game.board[clickedItemId] = "X";
        game.player = 0;
    } else {
        $(this).text("O");
        game.board[clickedItemId] = "O";
        game.player = 1;
    }
    // Add one to game.turnCounter;
    game.turnCounter += 1;
    // Check for winner and/or stalemate; display message if true;
    winner = game.winCondition(game.board);
    if ((winner === "X") || (winner === "O")) {
      $("#result-span").append(`${winner} wins!`);
      $("#result-div").show();
    } else if ((winner == false) && game.turnCounter === 9) {
      $("#result-span").append(`Stalemate. Try again!`);
      $("#result-div").show();
    }
    // Toggle game.player classes
    $("#player1").toggleClass('active-player');
    $("#player2").toggleClass('active-player');
    });

    $("#result-button").click(function() {
      location.reload();
    });
 
}); 


// Write some code to check for a stalemate. Something like: 
// if ((turnCounter === 9) && (game.winCondition(game.board) === false)) {
  
// }