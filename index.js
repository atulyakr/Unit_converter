/*
1 meter = 3.281)*1000)/1000) feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let numberEL=document.getElementById("number-el")
const convertEL=document.getElementById("convert-btn")
let lengthEL=document.getElementById("len")
let volumeEL=document.getElementById("vol")
let massEL=document.getElementById("mas")

convertEL.addEventListener("click",function(){
    lengthEL.innerHTML=`${Number(numberEL.value)} meters = ${(Math.round((Number(numberEL.value)*3.281)*1000)/1000)} feet | ${Number(numberEL.value)} feet = ${(Math.round((Number(numberEL.value)/3.281)*1000)/1000)} meter `
    
    volumeEL.innerHTML=`${Number(numberEL.value)} liter = ${(Math.round((Number(numberEL.value)*0.264)*1000)/1000)} gallon | ${(numberEL.value)} gallon = ${(Math.round((Number(numberEL.value)/0.264)*1000)/1000)} liter `
    
    massEL.innerHTML=`${Number(numberEL.value)} KG = ${(Math.round((Number(numberEL.value)*2.204)*1000)/1000)} pound | ${Number(numberEL.value)} pound = ${(Math.round((Number(numberEL.value)/2.204)*1000)/1000)} KG `
})