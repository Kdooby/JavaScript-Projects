//Global Variable

var x = 25;
function multiply_Numbers_1() { 
    document.write(4 * x + "<br>");
}
function multiply_Numbers_2() {
    document.write(x * 100 + "<br>");
}
multiply_Numbers_1();  //returns 4 * 25 
multiply_Numbers_2();  //returns 25 * 100


//Local Variable

function divide_Numbers_1() {
    var y = 4;
    document.write(60 / y + "<br>");
}
function divide_Numbers_2() {
    document.write(y / 2 + "<br>");
    }
divide_Numbers_1(); //returns 60 / 4
divide_Numbers_2(); //No return because variable is inside of first function



//Console.Log 

function divide_Numbers_3() {
    var z = 4;
    console.log(60 / z + "<br>");
}
function divide_Numbers_4() {
    console.log(z / 2 + "<br>");
    }
divide_Numbers_3(); //returns 60 / 4
divide_Numbers_4(); //No return because variable is inside of first function



//get_Date 

function get_Date() {
    if (new Date().getHours() < 18) { //Returns the hour in the specified date according to local time
        document.getElementById("Greeting").innerHTML = "It is before 6:00pm!";
    
    }
}



//if_Statement
function less_Than() {  //I could only get this if statement to work if I put it into a function.
    if (69 < 420) {
        document.getElementById("two_Numbers").innerHTML = "69 is less than 420, but equally great numbers.";
    }
}


//else_Statement
function age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Drink = "You are old enough to drink";    
    }
    else { //Will display if "if statement" is false
        Drink = "You are not old enough to drink, sorry";
    }
    document.getElementById("How_old?").innerHTML = Drink;

}

//else_if_Statement
function time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is the Morning";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the Afternoon";
    }
    else {
        Reply = "It is the Evening";
    } 
    document.getElementById("Time_of_day").innerHTML = Reply;
}