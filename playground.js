
let makeupExecuteButton = document.getElementById("buttonMakeup");
let oldExecuteButton = document.getElementById("buttonOld");
let youngExecuteButton = document.getElementById("buttonYoung");
let gamingExecuteButton = document.getElementById("buttonGaming");
let fashionExecuteButton = document.getElementById("buttonFashion")

let ageElement = document.getElementById("age");
let marginElement = document.getElementById("margin");
let submitExecuteButton = document.getElementById('submitButton');

let linkElement = document.getElementById('link');


// Updates the link based on the age button clicked

document.addEventListener('DOMContentLoaded', function() {

    AOS.init();

  //Makeup button
  makeupExecuteButton.addEventListener('click', function() {
    makeupExecuteButton.style.backgroundColor = "gray"
    gamingExecuteButton.style.backgroundColor = "#E5E8EE"
    fashionExecuteButton.style.backgroundColor = "#E5E8EE"
  //   ageElement.style.display = 'block';
  //   marginElement.style.display = 'block';

  });

       

  //Age buttons
  youngExecuteButton.addEventListener('click', function() {
    // submitExecuteButton.style.display = "block";
    youngExecuteButton.style.backgroundColor = "gray"
    oldExecuteButton.style.backgroundColor = "#E5E8EE"
    linkElement.href = 'y-makeup.html'


  });

  oldExecuteButton.addEventListener('click', function() {
    // submitExecuteButton.style.display = "block";
    youngExecuteButton.style.backgroundColor = "#E5E8EE"
    oldExecuteButton.style.backgroundColor = "gray"
    linkElement.href = 'o-makeup.html'
  });

  //Gaming Button
  gamingExecuteButton.addEventListener("click", function(){
    // ageElement.style.display = "none"
    // marginElement.style.display = "none"
    // submitExecuteButton.style.display = "block"
    linkElement.href = 'gaming.html'
    gamingExecuteButton.style.backgroundColor = "gray"
    youngExecuteButton.style.backgroundColor = "#E5E8EE"
    oldExecuteButton.style.backgroundColor = "#E5E8EE"
    makeupExecuteButton.style.backgroundColor = "#E5E8EE"
    fashionExecuteButton.style.backgroundColor = "#E5E8EE"

  });

  //Fashion Button
  fashionExecuteButton.addEventListener("click", function(){
    // ageElement.style.display = "none"
    // marginElement.style.display = "none"
    // submitExecuteButton.style.display = "block"
    linkElement.href = 'fashion.html'
    fashionExecuteButton.style.backgroundColor = "gray"
    youngExecuteButton.style.backgroundColor = "#E5E8EE"
    oldExecuteButton.style.backgroundColor = "#E5E8EE"
    makeupExecuteButton.style.backgroundColor = "#E5E8EE"
    gamingExecuteButton.style.backgroundColor = "#E5E8EE"

  });



});

$(document).ready(function() {
  // Get DOM elements
  let ageElement = $("#age");
  let marginElement = $("#margin");
  let submitExecuteButton = $("#link");

  let oldExecuteButton = $("buttonOld");
  let youngExecuteButton = $("buttonYoung");


  $("#buttonMakeup").click(function() {
    ageElement.fadeIn(1000);
    marginElement.fadeIn(1000);
  });


  $("#buttonYoung").click(function() {
    submitExecuteButton.fadeIn(1000);
  });
   $("#buttonOld").click(function() {
    submitExecuteButton.fadeIn(1000);
  });


  $("#buttonGaming").click(function() {
    ageElement.fadeOut(1000);
    marginElement.fadeOut(1000);
    submitExecuteButton.fadeOut(1000);
    submitExecuteButton.fadeIn(700);
  });

  $("#buttonFashion").click(function() {
    ageElement.fadeOut(1000);
    marginElement.fadeOut(1000);
    submitExecuteButton.fadeOut(1000);
    submitExecuteButton.fadeIn(700);
  });
});