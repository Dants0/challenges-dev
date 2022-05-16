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

buyBtn.addEventListener('click', buyProduct);

//initialize
var count=0;
countItemCart.innerHTML = count;


function buyProduct(){
    checkCart();
}

const checkCart = () =>{
    let size = listSize.value;
    if(count>0&&size){
        alert('Quantidade: ' + count + ' Tamanho: ' + size);
        console.log('Quantidade: ' + count + ' Tamanho: ' + size)
    }else{
        alert('Adicione item')
    }
}

const addToCart = () =>{
    buyBtn.disabled=false;
    count++;
    countItemCart.innerHTML = count;
}

const subToCart = () =>{
    if(countItemCart.innerHTML>0){
        count--;
        countItemCart.innerHTML = count;
    }
}

const nextClouts = () =>{
    alert('redirecionando prox imagem');
}

const prevClouts = () =>{
    alert('redirecionando imagem anterior');
}

moreBuyBtn.addEventListener('click', addToCart);
minusBuyBtn.addEventListener('click', subToCart);
nextBtn.addEventListener('click', nextClouts);
prevBtn.addEventListener('click', prevClouts);