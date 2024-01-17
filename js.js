let answer = 0;
let x = 0;
let y = 0;

let displayValue =0;
let lastButtonType = '';
let operation = '';

const screenDiv = document.querySelector('#screen');

function addNumbers(x,y){return x+y};
function subNumbers(x,y){return x-y};
function multiplyNumbers(x,y){return x*y};
function divideNumbers(x,y){return x/y};

function operate(x,y,operation){
    switch (operation){
        case 'plus':
            answer = addNumbers(x,y);
            break;
        case 'minus':
            answer = subNumbers(x,y);
            break;
        case 'multiply':
            answer = multiplyNumbers(x,y);
            break;
        case 'divide':
            answer = divideNumbers(x,y);
            break;
    }
    console.log(answer);
    screenDiv.textContent = answer
    x = answer;
};

function buttonPressed(button){
    if (typeof button === "number"){
        if (displayValue === 0||lastButtonType === 'operator') {
            displayValue = button
        }
        else{
            displayValue = "" + displayValue + button
        }
        screenDiv.textContent = displayValue
        lastButtonType = 'number'
    }

    if (button === "plus"){
        operation = "plus";
        if (lastButtonType === 'number'){
            x=displayValue;
        }
        else{
            y=displayValue;
            operate(x,y,'plus')
        }
        lastButtonType = 'operator'
    }
    if (button === "divide"){
        if (!(lastButtonType === 'operator')){
            operation = "divide"
            lastButtonType = 'operator'
        }
        
        
    }
    if (button === "multiply"){
        if (!(lastButtonType === 'operator')){
            
        }
        lastButtonType = 'operator'
    }
    if (button === "minus"){
        if (!(lastButtonType === 'operator')){
            
        }
        lastButtonType = 'operator'
    }
    if (button === "dot"){
        
    }
    if (button === "equal"){
        if (lastButtonType === 'number'){
            y=displayValue;
            operate(x,y,operation);
            displayValue = answer;
            lastButtonType = 'euqal'
        }
            
    }
    if (button === "clear"){
        
    }
    if (button === "delete"){
        
    }
}

// operate(3,0,'divide');

