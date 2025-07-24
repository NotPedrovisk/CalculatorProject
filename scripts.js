let operator = "";
let firstNumber = "";
let secondNumber = "";
const NUMBERS ="1234567890"; 

let buttons = document.querySelectorAll("button");

buttons.forEach((but)=>{
    but.addEventListener("click", ()=>{
        console.log(but.textContent);
        
        firstNumber += but.textContent
        console.log(firstNumber)
        
        
    })
});

function addition(a,b){
    return (a+b)
};

function subtraction(a,b){
    return (a-b)
};

function multiply(a,b){
    return (a*b)
};

function divide(a,b){
    if(b == 0){
        console.log("amongus sus");
    }else{
        return (a/b)
    }
    
}