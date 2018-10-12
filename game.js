const hands = [...document.querySelectorAll(".select img")];

const game = {
    playerChoice: null,
    aiChoice: null,
}
const gameSummary = {
    games: 0,
    wins: 0,
    loses: 0,
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

// Game Init
const gameInit = function () {
    game.aiChoice = aiChoice();
}

document.querySelector(".start").addEventListener("click", gameInit);