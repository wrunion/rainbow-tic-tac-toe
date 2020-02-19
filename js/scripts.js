// Business Logic --------------

let turnCounter = 0;

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
  return "";
}

// Player 1 = X; Player 2 = O;
let player = 0;

// UI logic ---------------------
$(document).ready(function() {
  $("#player1").toggleClass('active-player');

  $(".square").click(function(e) {
    let winner = winCondition(board);
    // Has someone already won? If so, do nothing.
    // NOTE: WE ALSO NEED TO INCLUDE A 'CHECK FOR STALEMATE AND RETURN MESSAGE' LINE HERE
    if ((winner === "X") || (winner === "O")) return; 
  
    // Has someone already played that square? If so, do nothing.
    let textVal = $(this).text();
    if ((textVal === "X") || (textVal === "O")) return;

    // If the click is valid, 
    // Use Vanilla JS to get the ID of the clicked square.
    let clickedItemId = this.id;
    // Check which player is active. Write their marker to the square, then toggle the player counter variable.
    if (player) {
        $(this).text("X");
        board[clickedItemId] = "X";
        player = 0;
    } else {
        $(this).text("O");
        board[clickedItemId] = "O";
        player = 1;
    }
    // Add one to turnCounter;
    turnCounter += 1;
    // Check for winner and/or stalemate; display message if true;
    winner = winCondition(board);
    if ((winner === "X") || (winner === "O")) {
      $("#result-span").append(`${winner} wins!`);
      $("#result-div").show();
    } else if ((winner == false) && turnCounter === 9) {
      $("#result-span").append(`Stalemate. Try again!`);
      $("#result-div").show();
    }
    // Toggle player classes
    $("#player1").toggleClass('active-player');
    $("#player2").toggleClass('active-player');
    });

    $("#result-button").click(function() {
      location.reload();
    });
 
}); 


// Write some code to check for a stalemate. Something like: 
// if ((turnCounter === 9) && (winCondition(board) === false)) {
  
// }