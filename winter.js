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
    //console.log(`You have clicked square number ${this.id}`);
    $(this).css('background-color', 'green');

      // Step 1: Get value of the id of the item clicked using this.id
      // Step 2: Write "X" to the board
      // Step 3: Store "X" in board object in the key that corresponds to the id

      let clickedItem = this.id;    
      $(this).text("X");

      board[clickedItem] = "X";
      //console.log(board);
    });

}); 
