function My_First_Function() {                   //Defining a function and naming it
    var str = "check out this text!  Its Blue!"; //Defining a variable and giving it a 
                                                //string value
    var result = str.fontcolor("blue");           //Using the fontcolor method on str variable

    document.getElementById("Blue_Text").innerHTML=result;//putting the value of result into
                                                            //HTML element with "Blue_Text" id
}


function myFunction() {
    var sentence = "I am learning"; //Defining a variable called "sentence"
    sentence += " a lot from this course!"; //taking sentence variable and "concatenating"
    document.getElementById("Concatenate").innerHTML=sentence;
}

function gettagFunction() {
    var foo = document.getElementsByTagName("p");
    document.write(foo);
}
    
