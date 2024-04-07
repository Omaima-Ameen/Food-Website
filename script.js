let menubar = document.querySelector("#menu-bar")
let navbar = document.querySelector(".navbar")

menubar.onclick = () =>{
    menubar.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}
console.log("doggy")