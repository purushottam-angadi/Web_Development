// console.log("Om Sai Ram")

// // ﻿
// // Om Sai Ram
// // document.body.childNodes
// // NodeList(5) [text, div.container, text, script, text]
// // document.body.firstElementChild
// // document.body.firstElementChild.childNodes
// // NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// // document.body.firstElementChild.children
// // HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]


// // // 
// // ﻿
// // dom.js:1 Om Sai Ram
// // document.body.firstElementChild.children[4].nextElementSibling
// // null
// // document.body.firstElementChild.children[3].nextElementSibling
// // document.body.firstElementChild.children[4].parentElement
// // document.body.firstElementChild.children[4].previousElementSibling


// // let names= document.getElementsByClassName("box")
// // console.log(names)

// // // names[2].style.backgroundColor="red"
// // document.getElementById("new").style.backgroundColor="green"

// document.querySelector(".box").style.backgroundColor="green"


document.querySelectorAll(".box").forEach(e=> {
    e.style.backgroundColor="green"


});

console.log(document.getElementsByTagName("div"))

// element.matches(css)
// element.closest(css)
// element.contains(css)

