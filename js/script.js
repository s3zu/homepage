let body = document.querySelector(".body");
let button = document.querySelector(".button");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
body.classList.toggle("bodyOptional");
themeName.innerText = body.classList.contains("bodyOptional") ? "Jasne" : "Ciemne"
}

);

