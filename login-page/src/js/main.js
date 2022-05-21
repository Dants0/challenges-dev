const inputEmail = document.getElementById('emailInput');
const inputPassword = document.getElementById('passwordInput');
const confirmInputPassword = document.getElementById('passwordInputConfirm');
const visibilityPassword = document.getElementById('togglePassword');
const btnSend = document.getElementById('sendButton');
const formInput = document.getElementsByClassName('inputsForm');

btnSend.addEventListener('click', sendLogin, false);
visibilityPassword.addEventListener('click', changeVisibility, false);


function sendLogin(){
    validateLogin();
}

function validateLogin(){
    var email = inputEmail.value;
    var password = inputPassword.value;
    var confirmPassword = confirmInputPassword.value;
    

    if(!email||!password||!confirmPassword){
        alert("Insira seus dados");
    }else if(password!=confirmPassword){
        alert("Senhas são diferentes");
    }else{
        alert(`Email: ${email}`);
        alert(`Password: ${password}`);
        alert(`Senha Confirmada: ${confirmPassword}`);
        alert('Abrindo nova guia');
        newTab();
    }
}

function changeVisibility(){
    const type = inputPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    inputPassword.setAttribute('type', type);

    this.classList.toggle('bi-eye');
}


function newTab(){
    window.open("http://127.0.0.1:5500/src/pages/homePage.html?");
}