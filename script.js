// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


function page4animation() {
    var elemc = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")

    elemc.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })

    elemc.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll((".elem"))
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}
page4animation();

function swiperAnmimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,

    });
}
swiperAnmimation();

function menuanimation() {

    var navimg = document.querySelector("nav img")
    var full = document.querySelector("#full-scr")
    var menu = document.querySelector("nav h3")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        }
        else {
            full.style.top = "-110%"
            navimg.style.opacity = 100
            flag = 0

        }

    });

}
menuanimation();

function loaderanimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"

    }, 4200)
}
loaderanimation();