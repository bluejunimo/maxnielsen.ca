'use strict';

var sfu_element = document.querySelector('#sfu');
var tue_element = document.querySelector('#tue');

sfu_element.rel = "";
tue_element.rel = "";
sfu_element.firstElementChild.textContent = "(changes content in next section)";
tue_element.firstElementChild.textContent = "(changes content in next section)";


var heading_element = document.querySelector('#details-heading');
var subheading_element = document.querySelector('#details-subheading');
var title_element = document.querySelector('#details-title');
var project_1_element = document.querySelector('#details-project-1');
var project_2_element = document.querySelector('#details-project-2');
var program_element = document.querySelector('#details-program');
var image_element = document.querySelector('#details-image');
var wrapper_element = document.querySelector('#about-details');

var sfu_heading_text = "Simon Fraser University, Canada";
var tue_heading_text = "Eindhoven University of Technology, The Netherlands";

var sfu_subheading_text = "5th year student";
var tue_subheading_text = "5 month international exchange";

var sfu_title_text = "Projects from SFU";
var tue_title_text = "Projects from TU/e";

var sfu_project_1_text = "Transit Fare Map";
var sfu_project_1_link = "project/headliner.html";

var sfu_project_2_text = "BC Healthcare Hub";
var sfu_project_2_link = "project/bc.html";

var tue_project_1_text = "Serendipity";
var tue_project_1_link = "project/serendipity.html";

// var tue_project_2_text = "Cats and the Home Office";
// var tue_project_2_link = "serendipity.html";

var sfu_program_text = "Interactive Arts and Technology";
var sfu_program_link = "https://siat.sfu.ca";

var tue_program_text = "Industrial Design";
var tue_program_link = "https://www.tue.nl/en/our-university/departments/industrial-design";

var sfu_image_src = "../img/sfu.webp";
var tue_image_src = "../img/tue.webp";
var sfu_image_alt = "Simon Fraser University's Surrey campus, embedded in a mall and office high-rise";
var tue_image_alt = "Eindhoven University of Technology's logo (TU/e) on lawn in front of Atlas, a 10-storey modern building.";


var new_tab_span = document.createElement('span');
new_tab_span.classList.add("hide-visually");
new_tab_span.textContent = "opens in new tab";

// https://www.w3schools.com/howto/howto_js_media_queries.asp
var breakpoint2 = window.matchMedia("(max-width: 800px)");
var clicked = true;
var switching = false;
var visible = false;
var isSFU_ = true;

function updateContent(isSFU) {
    if(isSFU) {
        heading_element.textContent = sfu_heading_text;
        // SFU CONTENT
        window.setTimeout(() => {
            subheading_element.textContent = sfu_subheading_text;
        }, 10);
        window.setTimeout(() => {
            title_element.textContent = sfu_title_text;
        }, 20);
        window.setTimeout(() => {
            project_1_element.textContent = sfu_project_1_text;
            project_1_element.href = sfu_project_1_link;
        }, 30);
        window.setTimeout(() => {
            project_2_element.classList.remove('hide');
        }, 40);
        window.setTimeout(() => {
            project_2_element.href = sfu_project_2_link;
            project_2_element.textContent = sfu_project_2_text;
        }, 45);
        window.setTimeout(() => {
            program_element.textContent = sfu_program_text;
            program_element.href = sfu_program_link;
            program_element.appendChild(new_tab_span);
        }, 50);
        window.setTimeout(() => {
            image_element.src = sfu_image_src;
            image_element.alt = sfu_image_alt;
        }, 60);
        // heading_element.textContent = sfu_heading_text;
        // subheading_element.textContent = sfu_subheading_text;
        // title_element.textContent = sfu_title_text;
        // project_1_element.textContent = sfu_project_1_text;
        // project_1_element.href = sfu_project_1_link;
        // project_2_element.href = sfu_project_2_link;
        // project_2_element.textContent = sfu_project_2_text;
        // project_2_element.classList.remove('hide');
        // program_element.textContent = sfu_program_text;
        // program_element.href = sfu_program_link;
        // program_element.appendChild(new_tab_span);
        // image_element.src = sfu_image_src;
        // image_element.alt = sfu_image_alt;
    }
    else {
        heading_element.textContent = tue_heading_text;

        window.setTimeout(() => {
            subheading_element.textContent = tue_subheading_text;
        }, 10);
        window.setTimeout(() => {
            title_element.textContent = tue_title_text;
        }, 20);
        window.setTimeout(() => {
            project_1_element.textContent = tue_project_1_text;
            project_1_element.href = tue_project_1_link;
        }, 30);
        window.setTimeout(() => {
            project_2_element.classList.add('hide');
        }, 40);
        window.setTimeout(() => {
            program_element.textContent = tue_program_text;
            program_element.href = tue_program_link;
            program_element.appendChild(new_tab_span);
        }, 50);
        window.setTimeout(() => {
            image_element.src = tue_image_src;
            image_element.alt = tue_image_alt;
        }, 60);
        // subheading_element.textContent = tue_subheading_text;
        // title_element.textContent = tue_title_text;
        // project_1_element.textContent = tue_project_1_text;
        // project_2_element.classList.add('hide');
        // project_1_element.href = tue_project_1_link;
        // program_element.textContent = tue_program_text;
        // program_element.href = tue_program_link;
        // program_element.appendChild(new_tab_span);
        // image_element.src = tue_image_src;
        // image_element.alt = tue_image_alt;
    }

}

// Change states
sfu_element.addEventListener('click', function(event) {
    event.preventDefault();
    if(!isSFU_) {
        isSFU_ = true;
        updateContent(isSFU_);
        
    }

    if(breakpoint2.matches) {
        heading_element.scrollIntoView(true);
    }
});

// Change states
tue_element.addEventListener('click', function(event) {
    event.preventDefault();
    if(isSFU_) {
        isSFU_ = false;
        updateContent(isSFU_);
    }

    if(breakpoint2.matches) {
        heading_element.scrollIntoView(true);
    }
});