const display = document.querySelector(".display")
const buttons = document.querySelectorAll("button")


let son1=''
let son2=''
let natija=''
let amal=''

// Kiritilgan sonlarni olish
function son(data){
    if(amal){
        son2+=data
        display.value=son2
    } else{
        son1+=data
        display.value=son1
    }
    
}

// Kiritilgan amalni olish
function f(data){
    amal=data
    display.value=amal
}

// Kritish maydonini tozalash
function tozalash(){
    son1=''
    son2=''
    display.value='0'
}

// Bitta sonni o'chirish
function ochirish(){
    if(son2){
        son2=''
        display.value=amal
    } else if(son1){
        son1=''
        display.value=''
    }
}

// Natijani hissoblash
function hisoblash(){
    son1=Number(son1)
    son2=Number(son2)
    if(amal==='+'){
       display.value=son1+son2
       son1+=son2
       amal=''
       son2=''
    } 
    if(amal==='-'){
        display.value=son1-son2
        son1-=son2
        amal=''
        son2=''
    }
    if(amal==='x'){
        display.value=son1*son2
        son1*=son2
        amal=''
        son2=''
    }
    if(amal==='/'){
        display.value=son1/son2
        son1/=son2
        amal=''
        son2=''
    }
    if(amal==='%'){
        display.value=son1%son2
        son1%=son2
        amal=''
        son2=''
    }
}