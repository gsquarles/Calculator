function add(num1,num2){
    return Math.round(parseFloat(num1) + parseFloat(num2));
}

function subtract(num1,num2){
    return Math.round(num1-num2);
}

function divide(num1,num2){
   // return num1 / num2;
    return num2 == 0 ? 'Cannot divide with zero' : Math.round(num1 / num2) ;
}

function multiply(num1, num2){
    return Math.round(num1 * num2);
}

function operate(op,num1,num2){
    if(op == '+'){
        document.getElementById("result").value = add(num1,num2);
    }
    else if(op == '-'){
        document.getElementById("result").value = subtract(num1,num2);
    }
    else if(op == '/'){
        document.getElementById("result").value = divide(num1,num2);
    }
    else if(op == '*'){
        document.getElementById("result").value = multiply(num1,num2);
    }
}
function clearScreen(){
    document.getElementById("result").value = "";
}

function clearAll(){
    document.getElementById("result").value = "";
    value1 = null;
    value2 = "";
    operator = "";
    finalResult = null;
}

function display_num(value){
    if(finalResult != null){
        clearScreen();
        document.getElementById("result").value += value;
    } else{
        document.getElementById("result").value += value;
    }
    
}

let operator;
let value1;
let value2;
let finalResult;

function equalKey(){
    if(finalResult != null){
        value2 = document.getElementById("result").value;
        operate(operator, finalResult, value2);
        finalResult = document.getElementById("result").value;
        operator = '';
        
    }
    else{
        value2 = document.getElementById("result").value;
        operate(operator,value1,value2);
        finalResult = document.getElementById("result").value;
        operator = ""
        
    }
    
}

function answer(btn){
    if(finalResult != null && operator != ""){
        value2 = document.getElementById("result").value;
        operate(operator, finalResult,value2);
        finalResult = document.getElementById("result").value;
    }
    else if(operator != "" && value1 != ""){
        value2 = document.getElementById("result").value;
        operate(operator,value1,value2);
        finalResult = document.getElementById("result").value;
        if(btn.value == "/"){
            operator = "/";
        }
        else if(btn.value == "+"){
            operator = "+";
        }
        else if(btn.value == "-"){
            operator = "-";
        }
        else if(btn.value == "*"){
            operator = "*";
        }
    } 

    if(btn.value == "/"){
        operator = "/";
    }
    else if(btn.value == "+"){
        operator = "+";
    }
    else if(btn.value == "-"){
        operator = "-";
    }
    else if(btn.value == "*"){
        operator = "*";
    }
    if(value1 == null){
        value1 = document.getElementById("result").value;
        clearScreen();//should clear display
    }
   
    
    
}

