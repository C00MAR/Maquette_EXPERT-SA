function OpenBurger() {
    document.querySelector("nav").classList.toggle("burgerActive");
    document.getElementById("burger_btn").classList.toggle("burgerClose");
}

document.getElementById("burger_btn").addEventListener("click", OpenBurger);