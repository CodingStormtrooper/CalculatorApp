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
function updateDisplayAfterDelte(num1) {
    const display = document.querySelector('.textview');
    display.value = num1;

}

function deleteDisplay() {
    console.log('tests delete')
    //need to make if display null than do nothing 
    console.log('TEST calc display before delete:' + calculator.displayValue);
    calculator.displayValue = calculator.displayValue.substring(0, calculator.displayValue.length - 1);
    console.log(calculator.displayValue);
    updateDisplayAfterDelte(calculator.displayValue);

}
    
    
function inputDigit(digit) {
  const displayValue = calculator.displayValue;
    
  // Overwrite `displayValue` if the current value is '0' otherwise append to it
  if (calculator.waitingForSecondOperand === "true"){
        calculator.displayValue = displayValue + digit;
        console.log('test inside digital if - secondoperand == true')
        
    }
    
    else {
        //need to update this so its actually adding and not just conncatinating
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
    console.log("waitng for second operand: " + calculator.waitingForSecondOperand)
    console.log("before calculator wait elses ab: ")
    
    if (calculator.waitingForSecondOperand === "false") {
        if (operatorSet === "+") {
            secondNumer = parseFloat(calculator.displayValue);
            total = sum(calculator.firstOperand, secondNumer);
            console.log("in else for operator");
            console.log(total);
        }

        else if (operatorSet === "=") {
            console.log("equal equation _____________-")
            secondNumer = parseFloat(calculator.displayValue);
            total = sum(calculator.firstOperand, secondNumer);
            console.log("in else  if for operator set === =");
            console.log(total);
            calculator.displayValue = total;
        }
    }
    else {
        if (operatorSet === "+") {
            calculator.operator = "+";
            console.log("Calculator operator: " + calculator.operator);
            calculator.firstOperand = parseFloat(calculator.displayValue);
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
    
keys.addEventListener("click", e => {
    const target = e.target;
    console.log(e);


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

    if (target.classList.contains('delete')) {
        console.log('clear', target.value);
        //remove last digit - delete
        deleteDisplay();
        return;

    }

    inputDigit(target.value);
    updateDisplay();

});   