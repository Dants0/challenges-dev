const btn = document.getElementById('activeC');
const message = document.getElementById('randomMessage')


btn.addEventListener("click", messageConselho, false);

function messageConselho(){
    let messageR = "Message aleatoria"
    message.innerHTML = messageR
}