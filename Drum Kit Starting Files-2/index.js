function playSound(key) {
    var sound;
    switch (key) {
        case "w":
            sound = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            sound = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            sound = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            sound = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            sound = new Audio("sounds/snare.mp3");
            break;
        case "k":
            sound = new Audio("sounds/crash.mp3");
            break;
        case "l":
            sound = new Audio("sounds/kick-bass.mp3");
            break;
    }
    sound.play();
}

var drums = document.getElementsByClassName("drum");
for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function() {
        var key = this.classList[0]; 
        playSound(key);
        buttonAnimation(this); 
    });
}

document.addEventListener("keydown", function(event) {
    var key = event.key;
    if (key === "w" || key === "a" || key === "s" || key === "d" || key === "j" || key === "k" || key === "l") {
        playSound(key);
        var buttons = document.getElementsByClassName("drum");
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains(key)) { 
                buttonAnimation(buttons[i]); 
            }
        }
    }
});

function buttonAnimation(button) {
    button.classList.add("pressed");
    setTimeout(function() {
        button.classList.remove("pressed");
    }, 100); 
}
