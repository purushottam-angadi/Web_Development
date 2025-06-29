// // function getdata(){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //          resolve(455)
// //         },3000)
// //     })
// // }

// // console.log("lets start")

// // let data=getdata();
// // data.then((v)=>{
// // console.log(data)
// // console.log("data was fetched!!")
// // })

// // console.log("i got printed before the data got fetched")


// // async function getdata(){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //          resolve(455)
// //         },30000)
// //     })
// // }



// async function getdata() {
//     let x = await fetch()
//     let data = await x.json()
//     return data;
// }


// async function main() {
//     console.log("lets start")

//     let data = await getdata();
//     console.log(data)

//     console.log("data was fetched!!")
//     // data.then((v)=>{
//     // console.log(data)
//     // console.log("data was fetched!!")
//     // })

//     console.log("i got printed before the data got fetched")

// }

// main()

// function getdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          resolve(455)
//         },3000)
//     })
// }

// console.log("lets start")

// let data=getdata();
// data.then((v)=>{
// console.log(data)
// console.log("data was fetched!!")
// })

// console.log("i got printed before the data got fetched")


// async function getdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          resolve(455)
//         },30000)
//     })
// }



// async function getdata() {
//     let x = await fetch()
//     let data = await x.json()
//     return data;
// }


async function getdata() {
 
    let x= await fetch('url',{
        method: 'POST',
        body: JSON.stringfy({
            title:'foo',
            body:'bar',
            userId:1,
        }),
        headers:{
            'Content-type': 'application/json ; charset=UTF-8',
        },
    })




async function main() {
    console.log("lets start")

    let data = await getdata();
    console.log(data)

    console.log("data was fetched!!")
    // data.then((v)=>{
    // console.log(data)
    // console.log("data was fetched!!")
    // })

    console.log("i got printed before the data got fetched")

}

main() 