function greeter(person) {
    /*return "Hello, " + person;*/
    for (var _i = 0; _i < 5; _i++) {
        return person;
    }
}
function greet(elementId) {
    var inputValue = document.getElementById(elementId).value;
    /*
        if (inputValue.trim() == "")
            inputValue = "World";
    */
    document.getElementById("greet").innerText = greeter(inputValue);
}
