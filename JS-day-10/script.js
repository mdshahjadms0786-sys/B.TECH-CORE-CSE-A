// function handleClick() {
//     document.getElementById("btn").textContent = "Clicked"
    
// }

const buttonElement = document.getElementById("btn");

buttonElement.style.color = "tomato";
buttonElement.textContent = "new heading";


// const headingElement = document.getElementById("heading");
// headingElement.style.color = "tomato";
// headingElement.textContent = "New Heading";

const head = document.querySelector("h1");
head.style.color = "tomato";
head.textContent = "New Heading";


// function handleClick() {

//     const spanEle = document.createComment("span").textContent = "this is span element";
//     document.createElement("span").
//     textContent = "this is span element";

//     const image = document.createElement("img");
//     image.setAttribute("https://th.bing.com/th/id/OIP.qJyyILpig2xFDdDkZCBTZwHaE8?w=237&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3");

//     image.setAttribute("alt", "KR MANGALAM UNIVERSITY");
  
//     document.getElementById("content").appendChild(spanEle);
//     document.getElementById("content").append(image);
// }


// function handleClick(){
//     const spanEle = document.createElement("span").textContent = "this is span element";
//     const image = document.createElement("img");

//     image.setAttribute("src", "https://th.bing.com/th/id/OIP.qJyyILpig2xFDdDkZCBTZwHaE8?w=237&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3");
//     image.setAttribute("alt", "KR MANGALAM UNIVERSITY");
//     document.getElementById("content").append(spanEle);
//     document.getElementById("content").append(image)
// }


document.getElementById("btn").addEventListener("click", () => {
    const spanEle = document.createElement("span").textContent = "this is span element";
    const image = document.createElement("img");

    image.setAttribute("src", "https://th.bing.com/th/id/OIP.qJyyILpig2xFDdDkZCBTZwHaE8?w=237&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3");
    image.setAttribute("alt", "KR MANGALAM UNIVERSITY");
    document.getElementById("content").append(spanEle);
    document.getElementById("content").append(image)
})