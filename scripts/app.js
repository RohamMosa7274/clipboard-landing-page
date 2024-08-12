const $ = document;
let nav_btn = $.querySelector(".nav__btn");
let nav_menu = $.querySelector(".nav-menu");



let nav_open = false; 


nav_btn.addEventListener('click', function () {

    if (nav_open) {
        nav_btn.classList.remove("nav__btn--open");
        nav_menu.classList.remove("nav-menu--open");
        nav_open = false;
    } else {
        nav_btn.classList.add("nav__btn--open");
        nav_menu.classList.add("nav-menu--open");
        nav_open = true;
    }
    
})



let setMenuOpen = true;

//////////////////////open dropdown menu (desktop)///////////////////////////

let f = $.querySelector("#menu ul.sub-menus");

let sub_menus = $.querySelector(".sub-menus");
let toggle_dropdown_arrow = $.querySelector(".dropdown-arrow");


toggle_dropdown_arrow.addEventListener('click', function () {
    if (setMenuOpen) {
        f.style.opacity = "1";
        f.style.visibility = "visible";
        f.style.transform = "translatey(10px)";
        setMenuOpen = false;
    }else {
        f.style.opacity = "0";
        f.style.visibility = "hidden";
        f.style.transform = "translatey(-4px)";
        setMenuOpen = true;
    }
})








////////////////////////////open dropdown menu (mobile)////////////////////////

let mobileMenuLink = $.querySelectorAll(".mobile-menu__link")[1];
let subMenus = $.querySelector(".mobile-menu__link ~ .sub-menus");
let mobileMenuItem = $.querySelectorAll(".mobile-menu__item")[1];

mobileMenuLink.addEventListener('click', function () {
    if (setMenuOpen) {
        subMenus.style.left = "0";
        subMenus.style.transition = "all 200ms ease-in-out"
        mobileMenuItem.style.marginBottom = "7rem";
        mobileMenuItem.style.transition = "all 100ms ease-in-out"
        setMenuOpen = false;
    } else {
        subMenus.style.left = "-100px";
        subMenus.style.transition = "all 110ms ease-in-out"
        mobileMenuItem.style.marginBottom = "0.5rem";
        mobileMenuItem.style.transition = "all 200ms ease-in-out"
        setMenuOpen = true;
    }
})

 //////// create smooth scroll btn ////////


let scroll_btn = $.querySelector(".footer__scroll");

scroll_btn.addEventListener("click", function (event) {
    
    event.preventDefault();
    const href = this.getAttribute("href");
    $.querySelector(href).scrollIntoView({
        behavior: "smooth"
    })
})