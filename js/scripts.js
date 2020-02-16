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
  $(".square").click(function(e) {
    $(this).css('background-color', 'green');
    let clickedItem = this.id;    
    $(this).text("X");
    board[clickedItem] = "X";
    });
}); 
