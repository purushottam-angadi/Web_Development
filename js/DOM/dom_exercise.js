
console.log("hey")
let boxes=document.getElementsByClassName("box")
console.log(boxes)
// Array.from(boxes).array.forEach(e =>{
//     console.log(e);
// });
function getrandomcolor(){
    let val1= 0 +Math.random()* 255;
    let val2= 0 +Math.random()* 255;
    let val3= 0 +Math.random()* 255;
    return `rgb(${val1} ${val2} ${val3} `
}
Array.from(boxes).forEach(e=>{
   console.log(e) 
   e.style.backgroundColor= getrandomcolor()
})