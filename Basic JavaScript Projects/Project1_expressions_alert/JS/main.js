var A = "This is a string assigned to a value, called by window.alert() method";

window.alert(A);

document.write("</br>");

var B = "Kevin once said: \"Wherever I am, I\'m there already\""
+", He also is quoted saying \"I\'m what Willis was talking about!\"";
document.write(B);

document.write("</br>");

var Family = "The Demings", Dad = "Van", Mom = "Pam", Son = "Kevin", Daughter = "Lacey";


var Family = Family.fontcolor("Red"); //This turns the Object to Red
var Dad = Dad.fontcolor("Orange"); //This turns the Object to Orange 
var Mom = Mom.fontcolor("Pink"); //This turns the Object to Pink
var Son = Son.fontcolor("Green");
var Daughter = Daughter.fontcolor("Blue");
document.write(Family); //This calls the object Family, and displays it in HTML
document.write(Dad); //This calls the object Dad, and displays it in HTML
document.write(Mom); //This calls the object Mom, and displays it in HTML
document.write(Son);
document.write(Daughter);

document.write("</br>");

document.write(45 + 75 * 10);


function resize_window() {
    alert("The window size has changed!")
}