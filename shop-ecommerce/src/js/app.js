const buyBtn = document.getElementById('cart');
const minusBuyBtn = document.getElementById('button-sub-item');
const moreBuyBtn = document.getElementById('button-add-item');
const countItemCart = document.getElementById('itemCount');
const listSize = document.getElementById('select-datalist');
const nextBtn = document.getElementById('button-next');
const prevBtn = document.getElementById('button-prev');
const shopBuy = document.getElementById('bagShop');
const menuList = document.getElementById('listMenu');


buyBtn.disabled = true;


//initialize
var count=0;
countItemCart.innerHTML = count;

function buyProduct(){
    checkCart();
}

const checkCart = () =>{
    console.log('botao ativo compra efetuada ' + count)
}

const addToCart = () =>{
    buyBtn.disabled=false;
    count++;
    countItemCart.innerHTML = count;
}

const subToCart = () =>{
    buyBtn.disabled=true;
    if(countItemCart.innerHTML===count){
    }
    
    if(countItemCart.innerHTML>0){
        count--;
        countItemCart.innerHTML = count;
    }
}

moreBuyBtn.addEventListener('click', addToCart);
minusBuyBtn.addEventListener('click', subToCart);
buyBtn.addEventListener('click', checkCart);