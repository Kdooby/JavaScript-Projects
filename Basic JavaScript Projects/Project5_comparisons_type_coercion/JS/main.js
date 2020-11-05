document.write(typeof "This Word", "<br>");

document.write(typeof 420, "<br>");

function is_NaN() {
    var res = "";
    res = res + isNaN("This is not a number") + ": This is not a number";
    document.getElementById("NaN").innerHTML = res;
}

function is_Num() {
    var res = "";
    res = res + isNaN("420") + ": 420 is a number";
    document.getElementById("is").innerHTML = res;
}

function infinity() {
    document.getElementById("Infinity").innerHTML =
    "The positive and negative version of 1.7976931348623157E42069, results in this: " + "<br>" + 1.7976931348623157E42069 + "<br>" + -1.7976931348623157E42069;
}

function get_Boolean() {
    var res = "";
    res = res + Boolean(15 > 10) + ": 15 > 10 " + "<br>";
    res = res + Boolean(20 < 17) + ": 20 < 17";
    document.getElementById("Boolean").innerHTML = res;
}

function get_Coercion() {
    document.getElementById("Coercion").innerHTML = "4" + 20;
}

function is_equal_to() {
    var res = "";
    res = res + Boolean(4 == 4) + ": 4 == 4 " +  "<br>";
    res = res + Boolean(10 == 5) + ": 10 == 5" ;
    document.getElementById("IsEqualTo").innerHTML = res;

}

function triple_Equals() {
    var res = "";
    res = res + Boolean(10 === 10) + ": 10 === 10" + "<br>";
    res = res + Boolean(15 === "Cactus") + ": 15 === Cactus" + "<br>";
    res = res + Boolean(20 === "Twenty") + ": 20 === Twenty" + "<br>";
    res = res + Boolean(69 === 420) + ": 69 === 420";
    document.getElementById("TripleEquals").innerHTML = res;
}

function And_Or() {
    var res = "";
    res = res + Boolean(10 > 5 && 20 > 8) + ": 10 > 5 && 20 > 8" + "<br>";
    res = res + Boolean(5 === 5 && 12 === "twelve") + ": 5 === 5 && 12 === Twelve" + "<br>";
    res = res + Boolean(45 == 45 || 53 == 21) + ": 45 == 45 || 53 == 21" + "<br>";
    res = res + Boolean(28 > 34 || 50 == 30) + ": 28 > 34 || 50 == 30";
    document.getElementById("AndOr").innerHTML = res;
}

function not_Function() {
    var res = "";
    res = res + !(500 > 100) + ": 500 is greater than 100" + "<br>";
    res = res + !(25 > 45) + ": 25 is not greater than 45";
    document.getElementById("Not").innerHTML = res;
}

console.log(400 + 200);
console.log(400 < 200);
