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
    checkList();
}

const checkCart = () =>{
    if(count>0){
        alert('Quantidade: ' + count + ' Tamanho: ' + listSize.value);
        console.log('Quantidade: ' + count + ' Tamanho: ' + listSize.value)
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

const checkList = () =>{
    listSize.value;
}

listSize.addEventListener("change", checkList);
moreBuyBtn.addEventListener('click', addToCart);
minusBuyBtn.addEventListener('click', subToCart);