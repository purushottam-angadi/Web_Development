let arr=[1,2,3,4]
// let newarr=[]

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
    
// }
// console.log(newarr)


// instead of the above method we can use this

let newarr= arr.map((e)=>{
    return e**2
})

console.log(newarr)

const greaterthanseven= (e)=>{
    if(e>7){
        return true;
    }
    return false;
}
console.log(newarr.filter(greaterthanseven))


let arr2=[1,2,3,4]
const red=(a,b) =>{
    return a*b;
}

console.log(arr2.reduce(red))


let B=Array.from('PURU')
console.log(B)