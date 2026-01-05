'use-strict'

var body_element = document.querySelector('body');
var copyright_element = document.querySelector('#copyright');


var mobile_menu_element = document.querySelector('#mobile-menu-link');
var nav_element = document.querySelector('header nav');
var sticky_header_element = document.querySelector('.i-want-sticky-header');
var about_link = document.querySelector('#about-link');

var mobile_breakpoint = window.matchMedia("(min-width: 56.25rem)");

if (sticky_header_element != null) {
    sticky_header_element.classList.add('sticky-header');
}

// https://stackoverflow.com/a/77004784
const el = document.querySelector(".sticky-header");
window.addEventListener("scroll", () => {
    if (mobile_breakpoint.matches && sticky_header_element != null) {
        sticky_header_element.classList.add('sticky-header');
        const stickyTop = parseInt(window.getComputedStyle(el).top);
        const currentTop = el.getBoundingClientRect().top;
        el.classList.toggle("header-scrolled", currentTop === stickyTop);
    }
    else if(sticky_header_element != null) {
        sticky_header_element.classList.remove('sticky-header');
        sticky_header_element.classList.remove("header-scrolled");
    }
});


window.addEventListener('resize', () => {
    if (!mobile_breakpoint.matches) {
        // mobile_menu_element.classList.remove('hide');
        // nav_element.classList.add('hide');
    }
    else if(sticky_header_element != null) {
        // mobile_menu_element.classList.add('hide');
        // nav_element.classList.remove('hide');
        // nav_element.classList.remove('active');
        sticky_header_element.classList.remove('sticky-header');
        sticky_header_element.classList.remove("header-scrolled");
    }
});