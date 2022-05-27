const addBtn = document.getElementById("Add");
const subBtn = document.getElementById("Sub");
const addBtn2 = document.getElementById("Add2");
const subBtn2 = document.getElementById("Sub2");
const addBtn3 = document.getElementById("Add3");
const subBtn3 = document.getElementById("Sub3");
const continueBtn = document.getElementById("btnContinue");
const countNumWorks = document.getElementById("numCounterWorks");
const countNumPause = document.getElementById("numCounterPause");
const countNumSections = document.getElementById("numCounterSections");

addBtn.addEventListener("click", pressBtnAddWork, false);
subBtn.addEventListener("click", pressBtnSubWorks, false);
addBtn2.addEventListener("click", pressBtnAddPause, false);
subBtn2.addEventListener("click", pressBtnSubPause, false);
addBtn3.addEventListener("click", pressBtnAddSections, false);
subBtn3.addEventListener("click", pressBtnSubSections, false);

continueBtn.disabled = true;


var count = 0;


function pressBtnAddWork(){
    continueBtn.disabled = false;
    countNumWorks.innerHTML ++
}

function pressBtnAddPause(){
    continueBtn.disabled = false;
    countNumPause.innerHTML ++
}

function pressBtnAddSections(){
    continueBtn.disabled = false;
    countNumSections.innerHTML ++
}

function pressBtnSubWorks(){
    if(countNumWorks.innerHTML<0 || countNumWorks.innerHTML==0){
        countNumWorks.innerHTML = count;
    }else if(countNumWorks.innerHTML||countNumWorks.innerHTML==1){
        continueBtn.disabled = true;
    }
    else{
        countNumWorks.innerHTML --
    }
}

function pressBtnSubPause(){
    if(countNumPause.innerHTML<0 || countNumPause.innerHTML==0){
        countNumPause.innerHTML = count;
        continueBtn.disabled = true;
    }else{
        countNumPause.innerHTML --
    }
}

function pressBtnSubSections(){
    if(countNumSections.innerHTML<0 || countNumSections.innerHTML==0){
        countNumSections.innerHTML = count;
        continueBtn.disabled = true;
    }else{
        countNumSections.innerHTML --
    }
}