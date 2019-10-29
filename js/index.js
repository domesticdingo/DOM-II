// Your code goes here
let stopLink = document.querySelectorAll(".nav-link").forEach(x =>{
    x.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Stopped the link.");
    })
})

  
  
let dblhead = document.querySelector(".logo-heading");

dblhead.addEventListener("dblclick", (x) => {
    dblhead.style.color = "#00CED1"
    console.log("Clik'd");
  event.stopPropagation();
  })
  
let topimg = document.querySelector(".intro img");
topimg.addEventListener("click", () => {
    topimg.src = "img/bus.png"
})

let yellowheaders = document.querySelectorAll(".text-content h2").forEach(x =>{
    x.addEventListener("mouseover", () => {
        x.style.color = "yellow";
    })
})

const body = document.querySelector("body");

body.addEventListener("wheel", () => {
 body.style.backgroundColor="grey";
})

const navbar = document.querySelector(".main-navigation");
navbar.addEventListener("mouseenter", () => {
    navbar.style.backgroundColor = "blue";
})
navbar.addEventListener("mouseleave", () => {
    navbar.style.backgroundColor = "";
})

window.addEventListener("load", () => {
    console.log("The page has loaded.")
})

window.addEventListener("resize", () => {
    console.log("The window was resized.")
})

let footer = document.querySelector(".footer p");
footer.addEventListener("contextmenu", () => {
    footer.style.color = "yellow";
})