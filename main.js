var cards = document.querySelectorAll(".memory-card");

function flipCard(card) {
    card.classList.toggle("flip");
}

// cards.forEach(card =>card.addEventListener("click", flipCard));
var counter=1;
var county=0;  
var firstCard = null
function play() {
    $(".memory-card").on("click", function () {
        flipCard(this)
        counter++;
        if ($(firstCard).attr('name') === $(this).attr('name')) {
            firstCard = null;
            counter=counter-1;
            county=county+1;
        } else if (!firstCard) {
            firstCard = this
        } else {
            setTimeout(() => {
                flipCard( firstCard)
                firstCard = null
                flipCard(this)
            }, 500);
        }
        if(county==6){
        counter=0;
        county=0;
        }
    })
}
$(document).ready(play)
function count(){
    var score=document.getElementById('score');
    score.innerHTML="";
    score.append(counter)
}

function schuffle() {
    cards.forEach(card=>{
        var random = Math.floor(Math.random()*12)
        card.style.order = random;
    })
}
schuffle()


var soundy=document.getElementById('Musica')
function playmusic(){
    soundy.play();
}
function timer(){
    var sec = 60;
    var timer = setInterval(function(){
        document.getElementById('TimerDisplay').innerHTML=sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
};
timer();


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



    
