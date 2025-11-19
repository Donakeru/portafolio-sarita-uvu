const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const dropdownBtn = document.querySelector(".dropdown_btn");
const dropdown = document.querySelector(".dropdown");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("open");
});

// abrir/cerrar dropdown con clic
dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
});

// cerrar dropdown si se hace clic afuera
document.addEventListener("click", () => {
    dropdown.classList.remove("open");
});