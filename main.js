var cards = document.querySelectorAll(".memory-card");

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

function schuffle() {
    cards.forEach(card=>{
        var random = Math.floor(Math.random()*12)
        card.style.order = random;
    })
}
schuffle()

// function play() {
//     var audio = document.getElementById("audio");
//     audio.play();
// }
// play()

// var button = document.createElement("button");
// button.innerHTML = "Restart";
// var body = document.getElementsByTagName("body");
// body.append(button);
// button.addEventListener ("click", function() {
//     location.reload();
// });

// $(function(){
//     $("button").on("click",function(){
//         var r= $('<input type="button" id="reload"/>');
//         $("body").append(r);
//     });
// });



    
