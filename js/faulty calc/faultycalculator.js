//Create a faulty calculator using java script
//it takes two number as inputs
// it performs wrong opperations as follows
// +,-
//*,+
//-,/
//**

let random=Math.random()
console.log(random)
let a = parseFloat(prompt("Enter the first Number:"));
let b = parseFloat(prompt("Enter the second Number:"));
let c = prompt("Enter the operation");



let obj={
    "+":"-",
    "-":"*",
    "*":"/",
    "/":"+",

}
// if(random>0.1){
// if(c=="-")
//     {
//        alert("The result is :" + (a-b))
//        }
//     else if(c=="+")
//     {
//        alert("The result is :" + (a+b))
//     }
//    else if(c=="*")
//     {
//        alert("The result is :" + (a*b))
//     }
//    else 
//     {
//        alert("The result is :" + (a/b))
//     }
// }

// else{
//     c=obj[c];
//     if(c=="-")
//     {
//        alert("The result is :" + (a-b))
//     }
//      else if(c=="+")
//     {
//        alert("The result is :" +(a+b))
//     }
//    else if(c=="*")
//     {
//        alert("The result is :" + (a*b))
//     }
//    else 
//     {
//        alert("The result is :" + (a/b))
//     }
// }

if(random>0.1)
{
    console.log('The result is ${a} ${c} ${b}')
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    c=obj[c]
     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}