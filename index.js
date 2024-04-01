
let gamePattern = [];
let buttonsColor = ["green","red","yellow","blue"];
let index = nextSequence();
let randomChosenColor = buttonsColor[index];
gamePattern.push(randomChosenColor);
let userClickedButton = [];

//Button Animation and Sounds!

$("div .btn").click(function(event){
    let col ="#" + (event.target.id);
    let btnClicked = "div " + col;
    $(btnClicked).addClass("pressed");
    setTimeout(() => {
        $(btnClicked).removeClass("pressed");
    }, 160);
    let sound = "sounds/" + event.target.id + ".mp3";
    let audio = new Audio(sound);
    audio.play();
    userClickedButton.push(event.target.id);
});

// Random Number Generator!

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}