let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let add = document.querySelector("#add");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let display_result = document.querySelector("#display_result");


add.addEventListener("click", function (){
let num_1 = parseInt(num1.value);
let num_2 = parseInt(num2.value);
display_result.innerHTML = AddTwoNumbers(num_1, num_2);
})



minus.addEventListener("click", function (){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    display_result.innerHTML = SubtractTwoNumbers(num_1, num_2);
    })   


multiply.addEventListener("click", function (){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    display_result.innerHTML = MultiplyTwoNumbers(num_1, num_2);
    })   


divide.addEventListener("click", function (){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    display_result.innerHTML = DevideTwoNumbers(num_1, num_2);
    })       

    // parseInt - funkcia, ktora vie prekonvertovat intenger into number

function AddTwoNumbers(a, b) {
    let sum = a + b;
    return sum;
    
}

// let result = AddTwoNumbers(2, 10);

// display_result.innerHTML = result;

function SubtractTwoNumbers(a, b) {
    let diff = a - b;
    return diff;
}

function MultiplyTwoNumbers(a, b) {
    let product = a * b;
    return product;
}

function DevideTwoNumbers(a, b) {
    let quotient = a / b;
    return quotient;
}