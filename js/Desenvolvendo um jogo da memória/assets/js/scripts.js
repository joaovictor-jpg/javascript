const cards = document.querySelectorAll('.card');
let hasFlippedCad = false;
let firstCard, secondCard;
let lokBard = false;

function flipCard() {
    if(lokBard) return;

    if(this === firstCard) return;

    this.classList.add('flip');
    if(!hasFlippedCad) {
        hasFlippedCad = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCad = false;
    checkForMath();
}

function checkForMath() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards() {
    firstCard.removeEventiListener('click', flipCard);
    secondCard.removeEventiListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lokBard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCad, lokBard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach((card) => {
        let ramdomPosition = Math.floor(Math.random() * 12);
        card.style.order = ramdomPosition;
    })
})();

cards.forEach((card) => {
    card.addEventListener("click", flipCard);
});

