let menu=document.querySelector("#menu");
let navlist=document.querySelector(".navList")


menu.onclick=()=>{
    menu.classList.toggle("bx-x")
    navlist.classList.toggle("open")
}