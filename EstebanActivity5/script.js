const nname = document.getElementById("name");
const nameInput = document.getElementById("nname");
const output = document.getElementById("output");
const major = document.getElementById("major-output");
const majorSelect = document.getElementById("major");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

btn1.addEventListener("click", function() {

    nname.innerHTML = nameInput.value;
    output.innerHTML = "You clicked the first button!";
    setTimeout(function() {
        output.innerHTML = "Waiting for interaction...";
    }, 2000);
});

btn2.addEventListener("dblclick", function() {

    nname.style.color = "red";
    output.innerHTML = "You double-clicked the second button!";
    setTimeout(function() {
        output.innerHTML = "Waiting for interaction...";
        nname.style.color = "black";
    }, 2000);
});

btn3.addEventListener("mousedown", function() {

    this.style.backgroundColor = "green";
    output.innerHTML = "3rd button is active..."; 
});

btn3.addEventListener("mouseup", function() {

    this.style.backgroundColor = "";
    output.innerHTML = "3rd button is inactive...";
    setTimeout(function() {
        output.innerHTML = "Waiting for interaction...";
        nname.style.color = "black";
    }, 2000);
});

majorSelect.addEventListener("change", function() {

    major.innerHTML = majorSelect.value;
    output.innerHTML = "You selected a major!";
    setTimeout(function() {
        output.innerHTML = "Waiting for interaction...";
    }, 2000);
});

nameInput.addEventListener("input", function() {

    nname.innerHTML = nameInput.value;
    output.innerHTML = "You are typing...";
});

nameInput.addEventListener("blur", function() {

    output.innerHTML = "You left the name input field.";
    setTimeout(function() {
        output.innerHTML = "Waiting for interaction...";
    }, 2000);
});

nameInput.addEventListener("focus", function() {

    output.innerHTML = "You focused on the name input field.";
});

btn1.addEventListener("mouseover", function() {

    output.innerHTML = "You hovered over the first button!";
});

btn1.addEventListener("mouseout", function() {

    output.innerHTML = "You moved the mouse away from the first button!";
    setTimeout(function() {
        output.innerHTML = "Waiting for interaction...";
    }, 2000);
});

btn2.addEventListener("mouseover", function() {

    output.innerHTML = "You hovered over the second button!";
});

btn2.addEventListener("mouseout", function() {

    output.innerHTML = "You moved the mouse away from the second button!";
    setTimeout(function() {
        output.innerHTML = "Waiting for interaction...";
    }, 2000);
});

btn3.addEventListener("mouseover", function() {

    output.innerHTML = "You hovered over the third button!";
});

btn3.addEventListener("mouseout", function() {

    output.innerHTML = "You moved the mouse away from the third button!";
    setTimeout(function() {
        output.innerHTML = "Waiting for interaction...";
    }, 2000);
});