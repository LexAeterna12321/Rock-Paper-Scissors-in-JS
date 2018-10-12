const hands = [...document.querySelectorAll(".select img")];


const game = {
    playerChoice: null,
    aiChoice: null,
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