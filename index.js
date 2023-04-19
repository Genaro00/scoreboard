let count = 0 
let count2 = 0
let countEl= document.getElementById("count-el")
let countEl2= document.getElementById("count-el2")
let reset = 0

function add1(){
    count += 1
    countEl.textContent = count
}

function add2(){
    count += 2
    countEl.textContent = count
}
function add3(){
    count += 3
    countEl.textContent = count
}
function add1Btn(){
    count2 += 1
    countEl2.textContent = count2
}

function add2Btn(){
    count2 += 2
    countEl2.textContent = count2
}
function add3Btn(){
    count2 += 3
    countEl2.textContent = count2
}
function res(){
    count = reset
    count2 = reset
    countEl.textContent = reset
    countEl2.textContent = reset 
    
}