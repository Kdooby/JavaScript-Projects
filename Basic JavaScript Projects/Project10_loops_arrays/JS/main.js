//While Loops

function Call_Loop() {
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x; 
        x++; //increments 
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//String Length
function string_Length() {
    var str = "How many Characters in this sentence?";
    var n = str.length; //counts the characters in the variable "str"
    document.getElementById("Str_Length").innerHTML = n;
}

//For Loops
var Cars = ["Mazda", "BMW", "Audi", "Jeep", "Honda", "Subaru", "Lincoln"];
var Content = "";
var y;
function for_Loop() {
    for (y = 0; y < Cars.length; y++) { //if "y" is less than the length of Cars
        Content += Cars[y] + "<br>";
    }
    document.getElementById("List_Cars").innerHTML = Content;
}

//Arrays
function dog_pics() {
    var dog_Pictures = [];
    dog_Pictures[0] = "sleeping";
    dog_Pictures[1] = "barking";
    dog_Pictures[2] = "farting";
    dog_Pictures[3] = "eating";
    dog_Pictures[4] = "running";
    document.getElementById("Dog").innerHTML = "In this photo, the dog is " +
        dog_Pictures[2] + "..."; 
}

//Constants 
function constant_function() {;
    const Dog = {breed:"Pit Bull", sex:"Male", color:"Black and White"} ;
    Dog.color = "White and Black";
    Dog.toy = "Stuffed Sloth";
    document.getElementById("Constant").innerHTML = "Some people think my "
    +  Dog.breed + " is Black and White, but he's really " + Dog.color + ".  His favorite "
     + " toy is a " + Dog.toy + ".";
}

//Let Keyword
var x = 69
document.write(x);
{
    let x = 420; //allows changes to the variable "x" while inside this block code
    document.write("<br>" + x);   
}
document.write("<br>" + x); //returns back to original x variable, since outside of block code



//Return Statement
var x = my_Function(15, 20);

function my_Function(a, b) {
    return a * b;  
}
document.getElementById("Return").innerHTML = x;



//Object using "LET" keyword
let Computer = {
    cpu: "i9-9900k ",
    gpu: "2080 Super ",
    ram: "32gb ",
    mobo: "MSI Z390 ",
    description : function() {
        return "My computer has a " + this.cpu + ", " + this.gpu + "and " + this.ram +
        "ram, all hooked up to a " + this.mobo + "motherboard."; 
    }
};
document.getElementById("my_Computer").innerHTML = Computer.description();


//Break Statement

var text = "";
var i;
for(i = 10; i < 11; i--) {
    if (i === 9) {continue; } //it will get to "9", skip it and continue on
    else if (i === 7) {continue; } //it will get to "7", skip it and continue on
    else if (i === 1) {break; } //gets to the number "1", and stops the loop.
    text += "The next number down is " + i + "<br>";
}
document.getElementById("Break").innerHTML = text;