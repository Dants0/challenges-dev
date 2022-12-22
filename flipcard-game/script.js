const timer = document.querySelector(".time");


const temporizar = () => {
    setInterval((() => {
        timer++;
    },1000))
    console.log(timer);
    return temporizar
}