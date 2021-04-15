// var cards = document.querySelectorAll(".memory-card");

function flipCard(card) {
    card.classList.toggle("flip");
}

// cards.forEach(card =>card.addEventListener("click", flipCard));

function play() {
    var firstCard = null
    $(".memory-card").on("click", function () {
        flipCard(this)
        if ($(firstCard).attr('name') === $(this).attr('name')) {
            firstCard = null
        } else if (!firstCard) {
            firstCard = this
        } else {
            setTimeout(() => {
                flipCard(firstCard)
                firstCard = null
                flipCard(this)
            }, 500);
        }
    })
}
$(document).ready(play)
