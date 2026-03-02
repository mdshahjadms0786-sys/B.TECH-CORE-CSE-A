//  let pro = new Promise((resolve, reject) => {
//     let a = 10;
//     if(a > 50){
//         resolve("promise is resolved");
//     }else{
//         reject("promise is rejected");
//     }
// })
// pro 
//         .then(() => {
//     console.log("promise is resolved");
// })
// .catch((err) => {
//     console.log(err, "Promise rejected");
// })
//promise has  state
// 1. pending
// 2. fulfilled
// 3. rejected

//promise consumer
// .then method : when the promise is resolved it will go to then method
// .catch method : when the promise is rejected it will go to catch method]\\

//promise chaining
//


function pro(num) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(num);
            res();
        }, 1000)
    })
}
let proes = Promise.resolve()
for (let i = 1; i <= 5; i++) {
    proes = proes.then(() => pro(i))
}
// pro(1)
// .then (() =>pro(2))
// .then (() =>pro(3))
// .then (() =>pro(4))
// .then (() =>pro(5))   
// .catch(() => console.log("error"))
    

//disadvance: to perfom certain task we need to call a callback
//  function inside another callback function which 
// is called callback function multiple times, more
//  function for smaller task means more complexity 
//and time for execution and function call will be more.
