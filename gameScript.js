let gamePattern = [];
let buttonsColors = ["green", "red", "yellow", "blue"];
let userPattern = [];

let start = false;
let level = 0;

$(".begin button").click(function () {
    if(!start){
        nextSequence();
        start = true;
        $("#level-title").text("Level " + level);
        $(".begin button").addClass("hide");
    }
});


function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonsColors[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    gamePrompt(randomChosenColour);
    playSound(randomChosenColour);
    level++;
    $("#level-title").text("Level " + level);
    userPattern = [];
    return randomNumber;
}

// For making the Button blink and produce sound when starting and moving to next level in the game.

function gamePrompt(key) {
    let currentButton = "div #" + key;
    $(currentButton).fadeIn(100).fadeOut(100).fadeIn(100);
}

// Function used to play the sound when music is being played

function playSound(name) {
    let sound = "sounds/" + name + ".mp3";
    let audio = new Audio(sound);
    audio.play();
}

$(".btn").click(function () {
    let userChosenColour = $(this).attr("id");
    userPattern.push(userChosenColour);
    console.log(userPattern);
    let event = "div #" + userChosenColour;
    $(event).addClass("pressed");
    setTimeout(function () {
        $(event).removeClass("pressed");
    }, 165);
    playSound(userChosenColour);

    checkAnswer(userPattern.length - 1);
});

function checkAnswer (currentIndex) {

    if(gamePattern[currentIndex] === userPattern[currentIndex]){
        if(userPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("game over press any Key!!");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        gameOver();
    }

}

function gameOver() {
    level = 0;
    gamePattern = [];
    start = false;
    $(".begin button").removeClass("hide");
}