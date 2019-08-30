let colors = [];
let answer;
let selectedColor;
let cardsNumber = 6;
let isHard;
let cards = document.querySelectorAll(".card");
let colorDisplay = document.querySelector("#color");
let message = document.querySelector("#display");
let easy = document.querySelector("#easyBtn");
let hard = document.querySelector("#hardBtn");
let newColors = document.querySelector("#newColors");
let h1 = document.querySelector("h1");

init();

function init() {
    colorize();
    for ( let i = 0; i < cards.length; i++ ) {
        cards[i].addEventListener("click", getColor)
    }
    newColors.addEventListener("click", reset);
    easy.addEventListener("click", function() {
        easy.classList.add("highlight");
        hard.classList.remove("highlight");
        isHard = false;
        cardsNumber = 3;
        reset();
    });
    hard.addEventListener("click", function() {
        easy.classList.remove("highlight");
        hard.classList.add("highlight");
        isHard = true;
        cardsNumber = 6;
        reset();
    });    
}

function generateColor() {
    let color = "rgb(";
    r = randomNumber(0, 255);
    g = randomNumber(0, 255);
    b = randomNumber(0, 255);
    return color + r + ", " + g + ", " + b + ")";
}

function randomNumber(from, to) {
    return Math.floor( Math.random() * to + from );
}

function getColor() {
    selectedColor = this.style.background;
    if ( answer === selectedColor ) {
        message.textContent = "Correct";
        newColors.textContent = "Play Again?";
        setCardsColor(answer);
        h1.style.background = answer;
    } else {
        message.textContent = "Try Again!";
        this.style.background = "#232323";
    }
}

function setCardsColor(color) {
    for (let i = 0; i < cards.length; i++ ) {
        cards[i].style.background = color;
    }
}

function colorize() {
    colors = [];
    for ( let i = 0; i < cards.length; i++ ) {
        if ( i < cardsNumber ) {
            colors[i] = generateColor();
            cards[i].style.background = colors[i];
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
    answer = colors[randomNumber(0, cardsNumber - 1)];
    colorDisplay.textContent = answer;
}

function reset() {
    colorize();
    message.textContent = "";
    h1.style.background = "steelblue";
    newColors.textContent = "New Colors";
}
