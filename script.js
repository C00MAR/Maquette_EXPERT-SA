function OpenBurger() {
    document.querySelector("nav").classList.toggle("burgerActive");
    document.getElementById("burger_btn").classList.toggle("burgerClose");
}

document.getElementById("burger_btn").addEventListener("click", OpenBurger);

window.addEventListener('scroll', () => {
    var scrollpercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    document.getElementById('slider').style.marginLeft = -(scrollpercentage * 100) + 'vw';
})
