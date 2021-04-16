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
            //change(sourceUrl);
        } else if (!firstCard) {
            firstCard = this
        } else {
            setTimeout(() => {
                flipCard( firstCard)
                firstCard = null
                flipCard(this)
            }, 500);
        }
        if(county===7){
        counter=0;
        county=0;
        }
        if(county===6){
          playCongrat();  
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

function playAudio() {
    var audio = document.getElementById("audio");
    audio.play();
}

playCongrat = function () {
    var sound = document.getElementById("clip");
    sound.play();
}

function start(){
    function timer(){
        var sec = 60;
        var timer = setInterval(function(){
            document.getElementById('TimerDisplay').innerHTML=sec;
            sec--;
            if (sec < 0 || county === 6) {
                console.log(county)
                clearInterval(timer);
            }
        }, 1000);
    };
    timer();
}

function reload() {
    location.reload();
}

// function change(sourceUrl) {
//     var audio = $("#newSong");      
//     $("#mp3_src").attr("src", sourceUrl);
//     audio[0].pause();
//     audio[0].load();
//     audio[0].oncanplaythrough = audio[0].play();
// }
 
