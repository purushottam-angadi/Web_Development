console.log("Hey sairam")

var a=5;
var b=6;

console.log(a*b)
console.log(typeof a,typeof b)

const a1=6;  //cannot change this
{
    let a=2; //let is block scoped
    console.log(a)
}
console.log(a)

let x="puru"
let y=22;
let z=3.55;
const p= true;
let r=null;

console.log(x,y,z,p,r)
console.log(typeof x ,typeof z ,typeof p ,typeof r)
//why type of null is object??

let o ={
    "name":"Harry" ,
    "job role" :"student",
    "is handsome": true
}
console.log(o)
o.salary ="100crores"
console.log(o.name);