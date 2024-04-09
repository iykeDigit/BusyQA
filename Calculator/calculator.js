function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b === 0){
        throw new Error('Division by zero!');
    }
    return a/b;
}

function calculate(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            throw new Error('Invalid Operator');                
    }
}

//test the calculator
try{
    console.log('Addition:', calculate('+', 5,3));
    console.log('Subtraction:', calculate('-', 10,4));
    console.log('Multiplication:', calculate('*', 5,3));
    console.log('Division:', calculate('/', 15,3));
    console.log('Division by zero:', calculate('/', 5,0));
} catch (error){
    console.log('Error:', error.message);
}