function addition_Function() {
    var addition = 10 + 10;
    document.getElementById("Add").innerHTML = "10 + 10 = " + addition;
    
}


function subtract_Function() {
    var subtraction = 20 - 15;
    document.getElementById("Sub").innerHTML = "20 - 15 = " + subtraction;

}

function multiply_Function() {
    var multiply = 12 * 12;
    document.getElementById("Multiply").innerHTML = "12 x 12 = " + multiply;
}

function divide_Function() {
    var divide = 60 / 4;
    document.getElementById("Divide").innerHTML = "60 / 4 = " + divide;
}

function more_Math() {
    var multiple_Operations = (9 + 5) * 12 / 2 - 4;
    document.getElementById("Mult_Op").innerHTML =
    "9 plus 5, multiplied by 12, divided in half and then subtracted by 5 equals: "
    + multiple_Operations;
}

function modu_Math() {
    var modulus_Math = 64 % 3;
    document.getElementById("Modulus").innerHTML = "When you divide 64 by 3, you have a remainder of: " + modulus_Math;
}

function negation_Operator() {
    var y = 15;
    document.getElementById("Neg_Op").innerHTML = -y;
}

function increment_Operator() {
    var x = 20;
    x++;
    document.getElementById("Increment").innerHTML = x;
}

function decrement_Operator() {
    var x = 20;
    x--;
    document.getElementById("Decrement").innerHTML = x;
}

window.alert(Math.random());
window.alert(Math.random() * 100);

function math_Min() {
    document.getElementById("Math_Min").innerHTML = Math.min(0, 150, 400, 3, -25, -100, -175);
}

function math_Max() { 
    document.getElementById("Math_Max").innerHTML = Math.max(0, 150, 400, 3, -25, -100, -175);
}