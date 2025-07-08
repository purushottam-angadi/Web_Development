


const randomdelay = () => {
    return new Promise((resolve, reject) => {
        let timeout = 1 + 6 * Math.random()
        setTimeout(() => {
            resolve();
        }, timeout * 1000)
    })
}
const addItem = async (item) => {
    await randomdelay();
    let div = document.createElement("div")
    div.innerHTML = item;
    document.body.append(div);

}

async function main() {

    setInterval(()=>{
        let last= document.body.lastElementChild;
       if(last.innerHTML.endsWith("..."))
       {
        last.innerHTML= last.innerHTML.slice(0,last.innerHTML.length -3)
       }
       else{
        last.innerHTML= last.innerHTML + "."
       }
    },700)

    let text = ["initializing hacking",
        "reading your files",
        "password files detected",
        "sending all passwords and personal files to the server",
        "cleaning up"]

    for (const item of text) {
        await addItem(item)
    }


}

main();







