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

// UI logic ---------------------
$(document).ready(function() {
  $("#player1").toggleClass('active-player');

  $(".square").click(function(e) {
        //console.log(`You have clicked square number ${this.id}`);
    $(this).css('background-color', 'green');
    let clickedItem = this.id;    
    $(this).text("X");
    board[clickedItem] = "X";
    console.log(board);

    // Toggle players
    $("#player1").toggleClass('active-player');
    $("#player2").toggleClass('active-player');

    });

 
}); 
