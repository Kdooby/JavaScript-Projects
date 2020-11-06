function Ride_Function() {  //Ternary Operators
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //Will display whether you're tall enough or not, depeding on user input
    document.getElementById("Vote").innerHTML = Can_vote + " to vote!"
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() { //Ternary Operators
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough"; //Will display whether you're old enough or not, depeding on user input
    document.getElementById("Vote").innerHTML = Can_vote + " to vote!"
}

function Vehicle(Make, Model, Color, Year) { //Making a Vehicle class
    this.Vehicle_Make = Make; 
    this.Vehicle_Model = Model;
    this.Vehicle_Color = Color;
    this.Vehicle_Year = Year;
}
var Jack = new Vehicle("Dodge", "Viper", "Red", 2020); //assigns variable and links to Vehicle Class
var Emily = new Vehicle("Jeep", "Trail Hawk", "White and Black", 2019); //assigns variable and links to Vehicle Class
var Erik = new Vehicle("Ford", "Pinto", "Mustard", 1971); //assigns variable and links to Vehicle Class
function myFunction() {  //creates function related to the Vehicle class
    document.getElementById("Keywords_and_Constructors").innerHTML =  
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}


function Computer(CPU, GPU, RAM, WaterCooled) { //Making a Computer Class
    this.Computer_CPU = CPU;
    this.Computer_GPU = GPU;
    this.Computer_RAM = RAM;
    this.Computer_WaterCooled = WaterCooled;
}
var Kevin = new Computer("i9-9900k", "2080 Super", 64, "Corsair H115i"); //assings variable and links to Computer Class
var Nick = new Computer("i7-9700K", "2070 Super", 32, "Corsair H60i"); //assings variable and links to Computer Class
var Devon = new Computer("Ryzen 5 2600", "1660 TI", 32, "ThermalTake X53"); //assings variable and links to Computer Class
function my_Computer() { //creates function related to the Vehicle class
    document.getElementById("New_and_This").innerHTML = 
    "Kevin has a custom made computer with an " + Kevin.Computer_CPU + " CPU, a " + Kevin.Computer_GPU +
    " GPU, loaded with " + Kevin.Computer_RAM + "GB's of Ram, and cooled using a " + Kevin.Computer_WaterCooled +
    " all in one water cooler.";

}


function count_Function() {
    document.getElementById("Nested_Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 20;
        function Plus_two() {Starting_point += 2;} // nested function 
        Plus_two(); 
        return Starting_point;
    }
}