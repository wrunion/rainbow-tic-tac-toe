// Business Logic --------------

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

function winCondition(board) {
  let winner = "";
  if ((board.one === board.two) && (board.two === board.three)) { winner = board.one; }
  if ((board.four === board.five) && (board.five === board.six)) { winner = board.four; }
  if ((board.seven === board.eight) && (board.eight === board.nine)) { winner = board.seven; }
  if ((board.one === board.four) && (board.four === board.seven)) { winner = board.one; }
  if ((board.two === board.five) && (board.five === board.eight)) { winner = board.two; }
  if ((board.three === board.six) && (board.six === board.nine)) { winner = board.three; }
  if ((board.one === board.five) && (board.five === board.nine)) { winner = board.one; }
  if ((board.three === board.five) && (board.five === board.seven)) { winner = board.three; }
  
  if (winner) {
    console.log(`${winner} wins!`);
    return winner;
  }
}

// Player 1 = X; Player 2 = O;
let player = 0;

// UI logic ---------------------
$(document).ready(function() {
  $("#player1").toggleClass('active-player');

  $(".square").click(function(e) {
        //console.log(`You have clicked square number ${this.id}`);
    $(this).css('background-color', 'green');
    let clickedItem = this.id;    
    
    if (player) {
      $(this).text("X");
      board[clickedItem] = "X";
      player = 0;
    } else {
      $(this).text("O");
      board[clickedItem] = "O";
      player = 1;
    }
    
    console.log(board);
     
    

    winCondition(board); 
    // Toggle players
    $("#player1").toggleClass('active-player');
    $("#player2").toggleClass('active-player');
    });

 
}); 
