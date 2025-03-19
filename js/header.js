'use-strict'

var body_element = document.querySelector('body');
var copyright_element = document.querySelector('#copyright');

// https://stackoverflow.com/a/6002276
var year = new Date().getFullYear();

var nav_projects_element = document.querySelector('#nav-projects');
var nav_connect_element = document.querySelector('#nav-connect');
var subnav_projects_element = document.querySelector('#subnav-projects');
var subnav_connect_element = document.querySelector('#subnav-connect');

var mobile_menu_element = document.querySelector('#mobile-menu-link');
var nav_element = document.querySelector('header nav');
var sticky_header_element = document.querySelector('.i-want-sticky-header');
var about_link = document.querySelector('#about-link');

var mobile_breakpoint = window.matchMedia("(min-width: 50rem)");


subnav_connect_element.classList.add('hide');
subnav_projects_element.classList.add('hide');
if (!mobile_breakpoint.matches) {
    mobile_menu_element.classList.remove('hide');
    nav_element.classList.add('hide');
}
sticky_header_element.classList.add('sticky-header');

copyright_element.textContent = "© Max Nielsen " + year;


// https://stackoverflow.com/a/8318629
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown
nav_projects_element.addEventListener('mouseenter', () => {
    if (mobile_breakpoint.matches) {
        subnav_projects_element.classList.remove('hide');
        nav_projects_element.classList.add('button-hover');
    }
});

nav_projects_element.addEventListener('mouseleave', () => {
    // setTimeout(1000);
    if (mobile_breakpoint.matches) {
        if (!document.querySelector('#subnav-projects a:hover')) {
            subnav_projects_element.classList.add('hide');
            nav_projects_element.classList.remove('button-hover');
        }
    }
});

subnav_projects_element.addEventListener('mouseleave', () => {
    // setTimeout(1000);
    if (mobile_breakpoint.matches) {
        if (!document.querySelector('#nav-projects:hover')) {
            subnav_projects_element.classList.add('hide');
            nav_projects_element.classList.remove('button-hover');
        }
    }
});

nav_connect_element.addEventListener('mouseenter', () => {
    if (mobile_breakpoint.matches) {
        subnav_connect_element.classList.remove('hide');
        nav_connect_element.classList.add('button-hover');
    }
});

nav_connect_element.addEventListener('mouseleave', () => {
    // setTimeout(1000);
    if (mobile_breakpoint.matches) {
        if (!document.querySelector('#subnav-connect a:hover')) {
            subnav_connect_element.classList.add('hide');
            nav_connect_element.classList.remove('button-hover');
        }
    }
});

subnav_connect_element.addEventListener('mouseleave', () => {
    // setTimeout(1000);
    if (mobile_breakpoint.matches) {
        if (!document.querySelector('#nav-connect:hover')) {
            subnav_connect_element.classList.add('hide');
            nav_connect_element.classList.remove('button-hover');
        }
    }
});



// MOBILE MENU
mobile_menu_element.addEventListener('click', function (event) {
    event.preventDefault();
    nav_element.classList.toggle('active');
    nav_element.classList.toggle('hide');
    subnav_projects_element.classList.add('hide');
    nav_projects_element.classList.remove('button-hover');
    subnav_connect_element.classList.add('hide');
    nav_connect_element.classList.remove('button-hover');
});

nav_projects_element.addEventListener('click', function (event) {
    if (!mobile_breakpoint.matches) {
        event.preventDefault();
        if (subnav_projects_element.classList.contains('hide')) {
            subnav_projects_element.classList.remove('hide');
            nav_projects_element.classList.add('button-hover');
            subnav_connect_element.classList.add('hide');
            nav_connect_element.classList.remove('button-hover');
        }
        else {
            subnav_projects_element.classList.add('hide');
            nav_projects_element.classList.remove('button-hover');
        }
    }
});

nav_connect_element.addEventListener('click', function (event) {
    event.preventDefault();
    if (subnav_connect_element.classList.contains('hide')) {
        subnav_connect_element.classList.remove('hide');
        nav_connect_element.classList.add('button-hover');
        subnav_projects_element.classList.add('hide');
        nav_projects_element.classList.remove('button-hover');
    }
    else {
        subnav_connect_element.classList.add('hide');
        nav_connect_element.classList.remove('button-hover');
    }
});

window.addEventListener('click', function (event) {
    if (nav_element.classList.contains('active') && !nav_element.contains(event.target) && !mobile_menu_element.contains(event.target)) {
        nav_element.classList.remove('active');
        nav_element.classList.add('hide');
        subnav_projects_element.classList.add('hide');
        nav_projects_element.classList.remove('button-hover');
        subnav_connect_element.classList.add('hide');
        nav_connect_element.classList.remove('button-hover');
    }
});

about_link.addEventListener('click', function (event) {
    if (!mobile_breakpoint.matches) {
        nav_element.classList.remove('active');
        nav_element.classList.add('hide');
        subnav_projects_element.classList.add('hide');
        nav_projects_element.classList.remove('button-hover');
        subnav_connect_element.classList.add('hide');
        nav_connect_element.classList.remove('button-hover');
    }
});


// // https://stackoverflow.com/a/73675287
// window.addEventListener('scroll', () => {
//     // console.log("sad");
//     if (body_element.scrollTop > 680 || document.documentElement.scrollTop > 680) {
//         // console.log("did it");
//         document.querySelector(".sticky-header").classList.add("header-scrolled");
//     } else {
//         document.querySelector(".sticky-header").classList.remove("header-scrolled");
//         // console.log("did NOT do it");
//     }
// });

// https://stackoverflow.com/a/77004784
const el = document.querySelector(".sticky-header");
window.addEventListener("scroll", () => {
    const stickyTop = parseInt(window.getComputedStyle(el).top);
    const currentTop = el.getBoundingClientRect().top;
    el.classList.toggle("header-scrolled", currentTop === stickyTop);
});


window.addEventListener('resize', () => {
    if (!mobile_breakpoint.matches) {
        mobile_menu_element.classList.remove('hide');
        nav_element.classList.add('hide');
    }
    else {
        mobile_menu_element.classList.add('hide');
        nav_element.classList.remove('hide');
        nav_element.classList.remove('active');
    }
});