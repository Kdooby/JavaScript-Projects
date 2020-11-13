//Form Validation
function validateForm() {
    x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Please fill out the form");
        return false;
    }
}
