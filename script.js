let gameButton = document.getElementById("game-button");
let timeResult = document.getElementById("time-result");
let startTime;
let endTime;

function startGame() {
    // Czekaj losowy czas (od 1 do 5 sekund)
    let randomTime = Math.floor(Math.random() * 5000) + 1000;

    // Pokaż przycisk po losowym czasie
    setTimeout(function() {
        gameButton.classList.remove("hidden");
        startTime = new Date().getTime();
    }, randomTime);
}

gameButton.addEventListener("click", function() {
    endTime = new Date().getTime();
    let reactionTime = (endTime - startTime) / 1000; // Czas w sekundach
    timeResult.textContent = "Twój czas reakcji: " + reactionTime.toFixed(2) + " sekundy.";
    gameButton.classList.add("hidden");
    startGame();
});

// Rozpocznij grę od razu po załadowaniu strony
startGame();
