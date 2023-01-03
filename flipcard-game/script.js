const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".time b"),
flipsTag = document.querySelector(".flips b"),
refreshBtn = document.querySelector(".details button"),
messageTimeout = document.querySelector(".message");


let maxTime = 5;
let timeLeft = maxTime;
let flips = 0;
let matchedCards = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;


function initTimer (){
    if(timeLeft <= 0){
        return clearInterval(timer);
    }
    timeLeft--;
    timeTag.innerText = timeLeft;
    timeIsOver(timeLeft)
}


function flipCard ({target: clickedCard}) {
    if(!isPlaying){
        isPlaying = true;
        timer=setInterval(initTimer, 1000);
    }
    if(clickedCard !== cardOne && !disableDeck && timeLeft > 0){
        flips++;
        flipsTag.innerText = flips;
        clickedCard.classList.add("flip");
        if(!cardOne){
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneIcon = cardOne.querySelector(".back-view i").classList.value;
        cardTwoIcon = cardTwo.querySelector(".back-view i").classList.value;
        matchCards(cardOneIcon, cardTwoIcon);
    }
}

function matchCards(icon_1, icon_2){
    if(icon_1 === icon_2){
        matchedCards++;
        if(matchedCards == 6 && timeLeft>0){
            return clearInterval(timer);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(()=>{
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(()=>{
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);

}


function shuffleCards(){
    timeLeft = maxTime;
    flips = matchedCards = 0;
    cardOne = cardTwo = "";
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    messageTimeout.innerHTML = ' '
    disableDeck = isPlaying = false;

    let arr = ["bxl-tiktok", "bxl-instagram-alt", "bxl-facebook-circle", "bxl-twitter", "bxl-whatsapp", "bxl-youtube", "bxl-tiktok", "bxl-instagram-alt", "bxl-facebook-circle", "bxl-twitter", "bxl-whatsapp", "bxl-youtube"];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) =>{
        card.classList.remove("flip");
        let iconTag = card.querySelector(".back-view i");
        setTimeout(() =>{
            iconTag.classList.value = `bx ${arr[index]}`;
        }, 500);
        card.addEventListener("click", flipCard);
    });

}

function timeIsOver(timer){
    if(timer==0){
        messageTimeout.innerText = "Time is over"
        return console.log("Timer is over")
    }
}

shuffleCards()

refreshBtn.addEventListener("click", shuffleCards)

cards.forEach(card=>{
    card.addEventListener("click", flipCard)
})