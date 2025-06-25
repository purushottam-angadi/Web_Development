let arr=[1,2,4,7]
console.log(arr,typeof arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])

console.log(arr.toString())
console.log(arr.join(" and "))
arr.pop()
console.log(arr.join(" and "))
arr.push("Puru")
console.log(arr.join(" and "))

// arr.shift() removes first element
// arr.unshift() adds new first element
delete arr[2]
console.log(arr.join(" and "))

//arrays can also be concatenated using concat a1,a2,a3

// arr.sort  used to sort the arr
//arr.splice(x,y,x1,y1) removes elements from index xto y and adds x1 and y1 at their place

// point to be noted splice and slice are different

console.log(arr)


