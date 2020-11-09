
//Concatenated Sentences
function full_Sentence() {
    var part_1 = "This is ";
    var part_2 = "a ";
    var part_3 = "concatenated ";
    var part_4 = "sentence";
    var part_5 = ".";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;

}

//Slice() Method
function slice_Method() {
    var Sentence = "This is a sentence that is going to be sliced";
    var Section = Sentence.slice(39, 45); //slices the values at between index 39 and 45
    document.getElementById("Slice").innerHTML = Section;
}

//toUpperCase() Method
function upperCase_Method() {
    var str = "click here to make this sentence uppercase";
    var res = str.toUpperCase(); //takes the "str" variable and makes every letter uppercase
    document.getElementById("UpperCase").innerHTML = res;
}

//search() Method
function search_Method() {
    var str = "Search for the word 'words' in this sentence";
    var x = str.search("words"); //finds the specified word and returns the starting index
    document.getElementById("Search").innerHTML = x;
}

//toString() Method
function toString_Method() {
    var n = 420;
    document.getElementById("toString").innerHTML = n.toString(); 
}

//precision() Method
function precision_Method() {
    var num = 3.14159265358979323846264338327;
    var res = num.toPrecision(10); //takes first 10 indexes and returns result
    document.getElementById("Precision").innerHTML = res;
}

//toFixed() Method
function toFixed_Method() {
    var num = 4.1969378;
    var n = num.toFixed(2); //takes the number and conerts to string, and rounds to "2" decimal points
    document.getElementById("Fixed").innerHTML = n;
}


//valueOf() Method
function valueOf_Method() {
    var str = "valueOf Method";
    var res = str.valueOf(); //Returns the primitive value of the string
    document.getElementById("ValueOf").innerHTML = res;
}