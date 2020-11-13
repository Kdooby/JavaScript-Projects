//SWITCH STATEMENT
function animal_function() {
    var animal_output;
    var animals = document.getElementById("Animal_Input").value;
    var animal_string = " is a great choice!"
    switch(animals) {
        case "Monkey":
            animal_output = "A " + "Monkey" + animal_string;
        break;
        case "Elephant":
            animal_output = "A " + "Elephant" + animal_string;
        break;
        case "Pegasus":
            animal_output = "A " + "Pegasus" + animal_string;
        break;
        case "Tiger":
            animal_output = "A " + "Tiger" + animal_string;
        break;
        case "Griffin":
            animal_output = "A " + "Griffin" + animal_string;
        break;
        case "Narwhal":
            animal_output = "A " + "Narwhal" + animal_string;
        break;
        default:
            animal_output = "Please enter an animal exactly how it is listed in the list.";

    }
    document.getElementById("Output").innerHTML = animal_output;
}

//ELEMENTS BY CLASS
function Change_Function() { 
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed"; 
}

//CANVAS Line
var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");
ctx.moveTo(0,0); 
ctx.lineTo(500, 250);
ctx.stroke();

//CANVAS Gradient
var c = document.getElementById("ID2_Name");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 500, 0); //The Spread of the Gradient in pixels
grd.addColorStop(0, "green");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 250); //Fills the entire rectangle container

