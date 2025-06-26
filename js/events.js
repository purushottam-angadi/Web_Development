
let btn=document.getElementById("btn")
btn.addEventListener("click", ()=>{

      alert("I was clicked")
})

// check mdn events
btn.addEventListener("contextmenu", ()=>{

      alert("Dont right click please")
})

document.addEventListener("keydown", (e)=>{

      console.log(e,e.key,e.keyCode)
})