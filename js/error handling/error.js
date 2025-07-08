let a =prompt("Enter first number")
let b =prompt("Enter second number")

if(isNaN(a)||isNaN(b))
{
    throw SyntaxError("Please enter a number")
}

// console.log(`The sum is ${parseInt(a)+parseInt(b)}`)



// try {
//     console.log("The sum is ",(parseInt(a)+parseInt(b))*x)
// } catch (error) {
//     console.log("Error aa gaya bhai")
// }
// console.log("The sum is ",(parseInt(a)+parseInt(b))*x)

let x=5
function main(){
try {
    console.log("The sum is ",(parseInt(a)+parseInt(b))*x)
    return true
} catch (error) {
    console.log("Error aa gaya bhai")
    return false
}
finally{
    console.log("All files are being closed")
}
}

let c=main()