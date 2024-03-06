let btnmenu = document.getElementById('btn_menu')
let menu= document.getElementById ("menu-mobile")
let overlay = document.getElementById("overlay_mobi")

btnmenu.addEventListener("click", ()=>{
  menu.classList.add('abrir-menu')
})

menu.addEventListener("click", () => {
  menu.classList.remove("abrir-menu")
})

overlay.addEventListener("click", () => {
  menu.classList.add("abrir-menu")
})