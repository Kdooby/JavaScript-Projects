function my_Pet() {
    var Animal = { //The contents of my dictionary 
        Species: "Cat",
        Color: "Black",
        Name: "Mr. Spock",

    };
    delete Animal.Name; //deletes the key "Name"
    document.getElementById("Dictionary").innerHTML = Animal.Name;
}