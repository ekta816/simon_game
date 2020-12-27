
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor="";
var gamePattern = [];
var userClickedPattern= [];
var level = 0;
var started = false;
// $("button").click(function(e){
//     var idClicked = e.target.id;
//     console.log(idClicked)
// });



$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

$(document).on("click", '.btn', function(e){
    var userChosenColor = e.target.id;
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    //console.log(userClickedPattern)
    checkAnswer(userClickedPattern.indexOf(userChosenColor));
});


function nextSequence() {
    level++;
    $("#level-title").text("Level " + level);
    userClickedPattern=[];
    var x = Math.floor(Math.random() * 4);
    randomChosenColor = buttonColors[x];
    
    gamePattern.push(randomChosenColor);
    //console.log(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(80).fadeIn(80).fadeOut(80).fadeIn(80);
    
}

function playSound(name) {
    switch (name) {
        case "blue":
            // var audio1 = new Audio("sounds/blue.mp3");
            // audio1.play();
            break;
        case "yellow":
            // var audio2 = new Audio("sounds/yellow.mp3");
            // audio2.play();
            break;
        case "red":
            // var audio3 = new Audio("sounds/red.mp3");
            // audio3.play();
            break;
        case "green":  
            // var audio4 = new Audio("sounds/green.mp3");
            // audio4.play();
            break;
        default:
    }
  }
  
  

function animatePress(currentColor) {
 $("#" + currentColor).addClass("pressed");
 setTimeout(function(){ $("#" + currentColor).removeClass("pressed"); }, 200);
}

function checkAnswer(currentLevel) {
      if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(gamePattern.length === userClickedPattern.length){
            //console.log("success");
            setTimeout(function(){ nextSequence(); }, 1000);
          }
      }
      else {
            $("body").addClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart");

            setTimeout(function () {
                $("body").removeClass("game-over");
              }, 200);

              startOver();
      }
      
}


function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}