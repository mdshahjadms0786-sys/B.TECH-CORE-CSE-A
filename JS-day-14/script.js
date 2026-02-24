const headingElement = document.getElementById("user");
headingElement.style.color = "blue";
headingElement.style.backgroundColor = "yellow";
headingElement.textContent = "What's Your Name?";
headingElement.innerHTML="<b>md shahjad<b>"

const buttonElement = document.getElementById("btn");
buttonElement.style.color = "red";
buttonElement.style.backgroundColor = "pink";
buttonElement.textContent = "Updated Button Text";

const paragraphElement = document.getElementById("para");
paragraphElement.style.color = "green";
paragraphElement.style.fontSize = "20px";
paragraphElement.textContent = "This is my first class on DOM manipulation.";
paragraphElement.style.border = "2px solid black";
paragraphElement.style.padding = "1px";
paragraphElement.style.borderRadius = "50px";
paragraphElement.style.width = "400px";
paragraphElement.style.margin = "10px auto";


const divElement = document.getElementById("div1");

divElement.style.backgroundColor = "orange";
divElement.style.width = "100px";
divElement.style.height = "100px";
divElement.style.display = "flex";
divElement.style.justifyContent = "center";
divElement.style.alignItems = "center";
divElement.style.fontSize = "24px";
divElement.style.color = "blue";
divElement.style.borderRadius = "50%";
divElement.textContent = "Welcome";
divElement.style.margin = "20px auto";
divElement.style.border = "2px solid red";
divElement.style.padding = "10px";

const paragraphElement1 = document.getElementById("para2");
paragraphElement1.style.color = "purple";
paragraphElement1.style.backgroundColor = "green";

const paragraphElement2 = document.getElementById("para3");
paragraphElement2.style.color = "white";
paragraphElement2.style.backgroundColor = "black";
paragraphElement2.style.display = "none";

const imageElement = document.getElementById("img1");
imageElement.style.width = "200px";
imageElement.style.height = "150px";
imageElement.style.borderRadius = "10px";
imageElement.style.border = "2px solid blue";
imageElement.style.margin = "20px auto";

const paragraphElement3 = document.getElementsByClassName("parag");

for (let i = 0; i < paragraphElement3.length; i++) {
    paragraphElement3[i].style.color = "brown";
    paragraphElement3[i].style.fontSize = "18px";
    paragraphElement3[i].style.backgroundColor = "lightgray";
    paragraphElement3[i].style.padding = "10px";
    paragraphElement3[i].style.borderRadius = "5px";
    paragraphElement3[i].style.margin = "10px auto";
    paragraphElement3[i].style.width = "300px";
}


const head = document.getElementsByTagName("h2");
for (let i = 0; i < head.length; i++) {
    head[i].style.color = "teal";   
    head[i].style.fontSize = "22px";
    head[i].style.backgroundColor = "lightyellow";
    head[i].style.padding = "20px";
    head[i].style.borderRadius = "50px";
    head[i].style.margin = "10px auto";
    head[i].style.width = "150px";
    head[i].style.border = "2px solid green";
    head[i].style.textAlign = "center";
    head[i].textContent = "thank you ";
    head[i].innerHTML = "<i>thank you</i>";
}


const divele = document.querySelector("#first h1");
divele.style.color = "red";
divele.style.fontSize = "30px";
divele.style.backgroundColor = "lightblue";
divele.innerText = "Welcome to DOM Manipulation";
divele.style.padding = "10px";
divele.style.margin = "10px auto";
divele.style.border = "2px solid black";
divele.style.borderRadius = "50px";

const divele1 = document.querySelector("#first p");
divele1.style.color = "blue";
divele1.style.fontSize = "20px";
divele1.style.backgroundColor = "lightyellow";
divele1.innerText = "This is the first div paragraph";
divele1.style.padding = "10px";
divele1.style.margin = "10px auto";
divele1.style.border = "2px solid black";
divele1.style.borderRadius = "50px";


const head5 = document.querySelectorAll("#head5");
head5.forEach((element) => {
    element.style.color = "magenta";
    element.style.fontSize = "24px";    
    element.style.backgroundColor = "lightgreen";
    element.style.padding = "10px";
    element.style.margin = "10px auto";
    console.log(element.style.color);
    element.style.border = "2px solid purple";
    element.style.borderRadius = "50px";
    element.style.width = "150px";      
    element.style.textAlign = "center";
    element.textContent = "Updated Heading";
    element.innerHTML = "<i>Updated Heading</i>";
});


const elements = document.querySelectorAll(".text");
elements.forEach(elements => {
    elements.style.color = "orange";
    elements.style.fontSize = "18px";
    elements.style.backgroundColor = "lightgray";
})
