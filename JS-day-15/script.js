const child = document.getElementById("child");
const parent = child.parentElement;
child.onclick = function () {
    parent.style.backgroundColor = "yellow";
    parent.style.padding = "20px";  
    parent.style.border = "2px solid black";
    parent.style.width = "200px";
    parent.style.height = "100px";  
    parent.style.display = "flex";
    parent.style.justifyContent = "center";
    parent.style.alignItems = "center";
    child.style.fontSize = "18px";
    child.style.fontWeight = "bold";
    child.style.color = "red";
    parent.style.cursor = "pointer";
}



const button = document.getElementById("btn");
button.onclick = function () {
    button.style.backgroundColor = "red";
    button.style.color = "blue";
    button.style.padding = "10px 20px";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.fontSize = "16px";
}


const chill = document.getElementById("child1");
chill.onclick = function () {
    chill.style.color = "green";
    chill.style.backgroundColor = "red";
    chill.style.padding = "10px";
    chill.style.border = "5px dashed darkblue";
    chill.style.textAlign = "center";
    chill.style.borderRadius = "50px";
    chill.textContent = "I am a software engineer";
    chill.style.cursor = "pointer";
}


const div = document.getElementById("parent2");
div.onclick = function () {
    div.style.backgroundColor = "lightblue";
    div.style.padding = "20px";
    div.style.border = "2px solid black";
    div.style.width = "300px";
    div.style.height = "150px";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.fontSize = "18px";
    div.style.fontWeight = "bold";
    div.style.color = "purple";
    div.style.cursor = "pointer";
}

const button1 = document.getElementById("btn1");
const image = button1.querySelector("img");
button1.onclick = function () {
    image.style.width = "200px";
    image.style.height = "200px";
    image.style.borderRadius = "50%";
    image.style.border = "5px solid orange";
    button1.style.backgroundColor = "lightgray";
    button1.style.padding = "10px 20px";
    button1.style.border = "none";
    button1.style.cursor = "pointer";
}
    