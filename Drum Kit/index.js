var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w":
            var s = new Audio("sounds/tom-1.mp3");
            s.play();
            break;

        case "a":
            var s = new Audio("sounds/tom-2.mp3");
            s.play();
            break;

        case "s":
            var s = new Audio("sounds/tom-3.mp3");
            s.play();
            break;

        case "d":
            var s = new Audio("sounds/tom-4.mp3");
            s.play();
            break;

        case "j":
            var s = new Audio("sounds/crash.mp3");
            s.play();
            break;

        case "k":
            var s = new Audio("sounds/kick-bass.mp3");
            s.play();
            break;

        case "l":
            var s = new Audio("sounds/snare.mp3");
            s.play();
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100)
}