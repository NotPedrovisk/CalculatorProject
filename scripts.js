let operator = undefined;
let firstNumber = undefined;
let secondNumber = undefined;


let buttons = document.querySelectorAll("button");

buttons.forEach((but)=>{
    but.addEventListener("click", ()=>{
        console.log(but.textContent);
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