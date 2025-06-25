function nice(name)
{
    console.log("You "+ name +" are soo good guy")
}

nice("purur")
nice("raj")


function sum(a,b,c=3)
{
    return a+b+c
}

result1=sum(3,5)
result2=sum(3,4,5)

console.log("Your answer is",result1)
console.log("Your answer is",result2)




const func1=(x)=>{
    console.log("Answer:",x)
}

func1(3)