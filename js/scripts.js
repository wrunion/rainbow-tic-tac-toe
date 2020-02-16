// Business Logic --------------


// const masterArray = [];

// function getValue(square) {
//   let value = $(this).text();
//   console.log(value);
//   masterArray.push(value);
// }

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
    console.log(`You have clicked square number ${this.id}`);
    $(this).css('background-color', 'green');
    console.log($(this).text("X"));
  });
}); 
