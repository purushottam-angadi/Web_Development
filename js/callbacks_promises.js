// setTimeout(()=>{
//     console.log("I am inside a timeout")
// },3000)

// const callback=(e)=>{
//  console.log(e)
// }

// const loadscript=(src, callback)=>{

//     let sc=document.createElement("script")
//     sc.src=src;
//     sc.onload=callback("Harry")
//     document.head.append(sc)
// }

// loadscript("https://www.youtube.com/watch?v=9JaDBYPmiJ0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=75",callback)


console.log('This is a promise');

let prom1= new Promise((resolve,reject)=>{

    let a= Math.random();
    if(a>0.5)
    {
        reject("No randome number generated")
    }
    else {

        setTimeout(()=>{
    console.log("Yes i am donne")
    resolve("PURU")
           },3000)
    }
})
let prom2= new Promise((resolve,reject)=>{

    let a= Math.random();
    if(a>0.5)
    {
        reject("No randome number generated 2")
    }
    else {

        setTimeout(()=>{
    console.log("Yes i am donne2")
    resolve("PURU2")
           },1000)
    }
})

let p3=Promise.all([prom1,prom2])
p3.then((a)=>
{
     console.log(a)
}).catch((err)=>{
    console.log(err)
})
let p4=Promise.allSettled([prom1,prom2])
p4.then((a)=>
{
     console.log(a)
}).catch((err)=>{
    console.log(err)
})
