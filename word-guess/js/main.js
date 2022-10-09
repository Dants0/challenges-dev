const inputs = document.querySelector('.inputs')
const hint = document.querySelector('.hint span')
const left = document.querySelector('.left span')
const wrong = document.querySelector('.wrong span')
const resetBtn = document.querySelector('.btn-reset')
const typing = document.querySelector('.inputLetter')


let word, maxGuesses, incorrectLetters = [], correctLetters = [];

const randomWord = () =>{
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word
    console.log(word)
    maxGuesses = word.length >= 5 ? 8 : 6
    correctLetters = [];
    incorrectLetters = [];
    hint.innerText = ranItem.hint;
    left.innerText = maxGuesses;
    wrong.innerText = incorrectLetters;

    let html = "";
    for (let i = 0; i<word.length; i++){
        html += `<input type = "text" disabled>`;
        inputs.innerHTML = html;
    }
}

randomWord()

const initGame = (e) =>{
    let key = e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)){
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key) {
                    correctLetters += key;
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`);
        }
        left.innerText = maxGuesses;
        wrong.innerText = incorrectLetters;
    }
    typing.value="";

    setTimeout(() => {
        if(correctLetters.length === word.length){
            alert(`Parabens, ${word.toUpperCase()}`);
            return randomWord()
        }else if(maxGuesses < 1){
            alert(`Game over`)
            for(let i = 0; i < word.length;i++){
                inputs.querySelectorAll("input")[i].value = word[i]
            }
        }
    }, 100)
}


resetBtn.addEventListener("click", randomWord)
typing.addEventListener("input", initGame);
inputs.addEventListener("click", ()=>typing.focus())
document.addEventListener("keydown", ()=>typing.focus())


