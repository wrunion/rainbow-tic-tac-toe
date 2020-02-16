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

    
    //console.log(board);
     
    

    
    // Toggle players
    $("#player1").toggleClass('active-player');
    $("#player2").toggleClass('active-player');

    });

 
}); 
