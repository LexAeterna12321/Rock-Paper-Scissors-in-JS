const hands = [...document.querySelectorAll(".select img")];

const game = {
    playerChoice: null,
    aiChoice: null,
}
const gameSummary = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}
// Player Choice
const handPick = function () {
    game.playerChoice = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "")
    this.style.boxShadow = "0 0 3px 3px #7c3";
}

hands.forEach(hand => {
    hand.addEventListener("click", handPick);
})
// AI Choice
const aiChoice = () => {
    const aiHand = hands[Math.floor(Math.random() * hands.length)].dataset.option;
    return aiHand;
}
// Result Check
const resultCheck = (player, ai) => {
    if (player === ai) {
        return "draw";
    } else if (
        (player === "rock" && ai === "scissors") ||
        (player === "paper" && ai === "rock") ||
        (player === "scissors" && ai === "paper")
    ) {
        return "win";
    } else {
        return "loss";
    }
}

// Game Init
const gameInit = function () {
    if (!game.playerChoice) {
        alert("Chose your hand, please")
    }
    game.aiChoice = aiChoice();
    const gameResult = resultCheck(game.playerChoice, game.aiChoice);

    document.querySelector("h2 span").innerHTML = gameResult;
}

document.querySelector(".start").addEventListener("click", gameInit);