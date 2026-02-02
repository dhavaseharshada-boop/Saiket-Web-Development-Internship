function showMessage() {
    var name = document.getElementById("username").value;

    if (name === "") {
        alert("Please enter your name");
    } else {
        document.getElementById("output").innerText =
            "Hello " + name + "! Welcome to my interactive app 😊";
    }
}
