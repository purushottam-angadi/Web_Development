// let obj={
//     a:1,
//     b:"Puru"
// }

// console.log(obj)

// let animal={
//     eats:true,
// }

// let rabbit={
//     jumps:true,
// }
// rabbit.__proto__=animal

// class Animal{
//     constructor(name){
//         this.name=name
//       console.log("Object has been created")
//     }
//     eats(){
//         console.log("I am eating")
//     }
//     jumps(){
//         console.log("I am jumping")
//     }
// }
// class Lion extends Animal{
//      constructor(name){
//         super(name)
//       console.log("Object has been created and it is a lion")
//     }
//     eats(){
//         super.eats()
//         console.log("I eat and even roar")
//     }
// }

// let a= new Animal("Bunny")
// console.log(a)

// let l=new Lion("Shera")
// console.log(l)

// Get and Set
class User{
constructor(name)
{
    this.name=name
}
get name(){
return this._name;
}

set name(value)
{
    if(value.length<4){
        console.log("Name is too short")
        return;
    } 
    this._name=value;
}
}
let user=new User("Puru")
console.log(user.name)

user =new User ("Rajbhai")
console.log(user.name)