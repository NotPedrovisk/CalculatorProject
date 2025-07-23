let operator = undefined;
let firstNumber = undefined;
let secondNumber = undefined;


let buttons = document.querySelectorAll("button");

buttons.forEach((but)=>{
    but.addEventListener("click", ()=>{
        console.log(but.textContent);
    })
})