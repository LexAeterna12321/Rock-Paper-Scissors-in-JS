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

// Game Result Publisher

const gamePublish = (player, ai, result) => {
    document.querySelector("[data-summary=your-choice]").textContent = player;
    document.querySelector("[data-summary=ai-choice]").textContent = ai;
    document.querySelector("[data-summary=who-win]").textContent = result;

    document.querySelector(".numbers span").textContent = ++gameSummary.games;
    if (result === "win") {
        document.querySelector(".wins span").textContent = ++gameSummary.wins;
    } else if (result === "loss") {
        document.querySelector(".losses span").textContent = ++gameSummary.losses;
    } else {
        document.querySelector(".draws span").textContent = ++gameSummary.draws;
    }
}

// game Reset

const gameReset = () => {
    document.querySelector(`[data-option="${game.playerChoice}"]`).style.boxShadow = "";
    game.playerChoice = "";
}

// Game Init
const gameInit = function () {

    if (!game.playerChoice) {
        return alert("Chose your hand, please");
    }

    game.aiChoice = aiChoice();
    const gameResult = resultCheck(game.playerChoice, game.aiChoice);
    gamePublish(game.playerChoice, game.aiChoice, gameResult);
    gameReset();
}

document.querySelector(".start").addEventListener("click", gameInit);