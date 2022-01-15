let mainPosition = window.pageYOffset;

// Scroll animation
AOS.init();

window.addEventListener("scroll", function() {
    let actualScroll = window.pageYOffset;
    if (mainPosition >= actualScroll) {
        document.getElementsByTagName("nav")[0].style.top = "0px"
    } else {
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    mainPosition = actualScroll;
})

// Menu
headerLinks = document.querySelectorAll(".header-links")[0];
let closedMenu = true;
document.querySelectorAll(".hamburguer")[0].addEventListener("click", function() {
    if (closedMenu) {
        document.querySelectorAll(".hamburguer")[0].style.background="rgb(255,255,255)";
        closedMenu = false;
    } else {
        document.querySelectorAll(".hamburguer")[0].style.background="rgb(255,255,255,.5)";
        closedMenu = true;  
    }
    headerLinks.classList.toggle("menu2")
})
