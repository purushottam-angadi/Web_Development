// let a=[5,4,3,2,1]
// let x=1

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     x=x*element
    
// }
// console.log(x)

// let arr2=[1,2,3,4]
// const red=(a,b) =>{
//     return a*b;
// }

// console.log(arr2.reduce(red))

let a=6

function factorial(number){

    let arr=Array.from(Array(number+1).keys())
    let c=arr.slice(1,).reduce((a,b)=>
    {
        return a*b
    }
    )
    console.log(c)
}

factorial(a)