let operator = "";
let firstNumber = "";
let secondNumber = "";
let total ="";
const NUMBERS ="1234567890";
const OPERATORS = "+-*/"; 
const EQUALS = "=";

let buttons = document.querySelectorAll("button");
let display = document.querySelector("p");

buttons.forEach((but)=>{
    but.addEventListener("click", ()=>{
    
        //prompts user to input first number
        if(operator === "" && NUMBERS.includes(but.textContent)){
        firstNumber += but.textContent;
        console.log(firstNumber);
        };
    
        //checks if the button pressed is an operator
        if(OPERATORS.includes(but.textContent)) {
            operator = but.textContent;
            console.log(operator);
        };

        //lets user input second number after operator is selected
        if(operator !="" && NUMBERS.includes(but.textContent)){
            secondNumber += but.textContent;
            console.log(secondNumber)
        };


        //lets user continue using result of last operation as the first number
        if(total !=""){
            if(OPERATORS.includes(but.textContent)){
                clearCal();
                firstNumber = total;
                total = "";
                operator = but.textContent;
            }
            if(NUMBERS.includes(but.textContent)){
                clearCal();
                total = "";
                firstNumber += but.textContent;
            }
        }

    


        //decides what function to use when equal sign is pressed depending on selected operator
        if(EQUALS.includes(but.textContent)){
            switch(operator){
                case "+":
                    addition(firstNumber, secondNumber);
                    break;
                case "-":
                    subtraction(firstNumber, secondNumber);
                    break;
                case "*":
                    multiply(firstNumber, secondNumber);
                    break;
                case "/":
                    divide(firstNumber, secondNumber);
                    break;
            }
        }



        //clears calculator
        if(but.textContent == "AC"){
            clearCal()
        }
    
        //displays result over equation
        if(!EQUALS.includes(but.textContent)){
        display.textContent = firstNumber + " " + operator + " " + secondNumber
        }

        
    
    })
});



function addition(a,b){
    showResult(parseFloat(a)+parseFloat(b))
};

function subtraction(a,b){
    showResult(parseFloat(a)-parseFloat(b))
};

function multiply(a,b){
    showResult(parseFloat(a)*parseFloat(b))
};

function divide(a,b){
    if(b == 0){
        showResult("amongus sus");
    }else{
        showResult(parseFloat(a)/parseFloat(b))
    }
    
}

function clearCal(){
    firstNumber = "";
    operator = "";
    secondNumber = "";
    console.log("Cleared");
}


//displays result on display, has preference over equation on display
function showResult(result){
    total = result
    display.textContent = result
}