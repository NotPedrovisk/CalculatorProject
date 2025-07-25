let operator = "";
let firstNumber = "";
let secondNumber = "";
const NUMBERS ="1234567890";
const OPERATORS = "+-*/"; 

let buttons = document.querySelectorAll("button");

buttons.forEach((but)=>{
    but.addEventListener("click", ()=>{
    
        if(operator === "" && !isNaN(but.textContent)){
        firstNumber += but.textContent
        console.log(firstNumber)
        }
        
        if(OPERATORS.includes(but.textContent)) {
            operator = but.textContent
            console.log(operator)
        }

        //clears calculator
        if(but.textContent == "AC"){
            firstNumber = "";
            operator = "";
            secondNumber = "";
            console.log("Cleared");
        }
        
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