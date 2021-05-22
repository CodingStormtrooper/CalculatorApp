const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};
    

function updateDisplay() {
    const display = document.querySelector('.textview');
    display.value = calculator.displayValue;

}
    
    
function inputDigit(digit) {
  const displayValue = calculator.displayValue;
    
  // Overwrite `displayValue` if the current value is '0' otherwise append to it
  if (calculator.waitingForSecondOperand === "true"){
        calculator.displayValue = displayValue + digit;
        
    }
    
    else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
        console.log("test inside digit elses");
    }  
  
}
  
function sum(num1,num2) {
    var total = num1 + num2;
    return eval(total.toString());
}
    
function _operator_(operatorSet, calcValue) {
    console.log("in operatorr function: " + operatorSet);
    console.log("calculator display: " + calculator.displayValue);
    
    if (calculator.waitingForSecondOperand === "false") {
        if (operatorSet === "+") {
            total = sum(calculator.firstOperand, calculator.displayValue);
            console.log("in else for operator");
            console.log(total);
        }
    }
    else {
        if (operatorSet === "+") {
            calculator.operator = "+";
            console.log("Calculator operator: " + calculator.operator);
            calculator.firstOperand = calculator.displayValue;
            console.log("First operand " + calculator.displayValue);
            calculator.waitingForSecondOperand = "false";
            console.log("Second operand " + calculator.waitingForSecondOperand);
            calculator.displayValue = '';

        }
    }
}
        
function inputDecimal(dot) {
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
    
    else {
        console.log("decimal already present");
    }
}
    
const keys = document.querySelector('.calculator-keys');
console.log(keys);
    
keys.addEventListener('click', (event) => {
    const target = event.target;


    if (!target.classList.contains('button')) {
        console.log("out");
        return;
    }

    if (target.classList.contains('symbol')) {
        console.log("pre operator: " + target.value);
        console.log(calculator.waitingForSecondOperand);
        _operator_(target.value, calculator.waitingForSecondOperand);
        updateDisplay();
        return;
    }

    //double check that no decimal is present already
    if (target.classList.contains('symbol-decimal')) {
        //console.log('decimal', target.value);
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('symbol-clear')) {
        console.log('clear', target.value);
        return;

    }

    inputDigit(target.value);
    updateDisplay();

});   