'use strict';

var sfu_element = document.querySelector('#sfu');
var tue_element = document.querySelector('#tue');
var lineContainer = document.querySelector('#line');
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

var sfu_subheading_text = "4th year student";
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


// https://www.w3schools.com/howto/howto_js_media_queries.asp
var breakpoint2 = window.matchMedia("(max-width: 800px)");
var clicked = true;
var switching = false;
var visible = false;
var isSFU_ = false;

// wrapper_element.classList.add('hide');

// Function to draw the line
// https://stackoverflow.com/a/58468957
function drawLine(isSFU, switching) {
     
    // // Clear any existing lines
    // if((clicked) && !switching) {
    //     lineContainer.innerHTML = '';
    //     visible = false;
    //     console.log("not working");
    //     wrapper_element.classList.add('hide');
    //     return;
    // }
    
    // visible = true;
    // wrapper_element.classList.remove('hide');

    return;
    setTimeout(function() {
        console.log("clicked: " + clicked);
        lineContainer.innerHTML = '';

    // Get the current bounding boxes of the elements
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    var sfu_box = sfu_element.getBoundingClientRect();
    var tue_box = tue_element.getBoundingClientRect();
    var heading_box = heading_element.getBoundingClientRect();

    // Ensure we're considering the scroll position
    var scrollX = window.scrollX || window.pageXOffset;
    var scrollY = window.scrollY || window.pageYOffset;

    // Calculate the start and end points
    if(isSFU) {
        var startX = sfu_box.left + scrollX;
        var startY = sfu_box.bottom + scrollY - 2;
    }
    else {
        var startX = tue_box.left + scrollX;
        var startY = tue_box.bottom + scrollY - 2;
    }
    var endX = heading_box.left + scrollX;
    var endY = heading_box.bottom + scrollY;

    var middle = 100;

    // Create a MediaQueryList object
    var breakpoint1 = window.matchMedia("(max-width: 1400px)");

    if(breakpoint1.matches) {
        middle = 20;
    }
 
    // Create the first horizontal line (X direction)
    var horizontalLine1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    horizontalLine1.setAttribute('x1', startX);
    horizontalLine1.setAttribute('y1', startY);
    horizontalLine1.setAttribute('x2', endX - middle);
    horizontalLine1.setAttribute('y2', startY); // Same Y as start point
    horizontalLine1.setAttribute('style', 'stroke: black; stroke-width: 1;');

    // Create the vertical line (Y direction)
    var verticalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    verticalLine.setAttribute('x1', endX - middle);
    verticalLine.setAttribute('y1', startY); // Same Y as the end of horizontal line
    verticalLine.setAttribute('x2', endX - middle);
    verticalLine.setAttribute('y2', endY);
    verticalLine.setAttribute('style', 'stroke: black; stroke-width: 1;');

    // Create the second horizontal line (X direction)
    var horizontalLine2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    horizontalLine2.setAttribute('x1', endX - middle);
    horizontalLine2.setAttribute('y1', endY); // Same Y as the end of vertical line
    horizontalLine2.setAttribute('x2', endX); // Go back to start X position
    horizontalLine2.setAttribute('y2', endY);
    horizontalLine2.setAttribute('style', 'stroke: black; stroke-width: 1;');

    // Append the lines to the SVG container
    lineContainer.append(horizontalLine1);
    lineContainer.append(verticalLine);
    lineContainer.append(horizontalLine2);
}, 75);
}

function updateContent(isSFU) {
    if(isSFU) {
        // SFU CONTENT
        heading_element.textContent = sfu_heading_text;
        subheading_element.textContent = sfu_subheading_text;
        title_element.textContent = sfu_title_text;
        project_1_element.textContent = sfu_project_1_text;
        project_1_element.href = sfu_project_1_link;
        project_2_element.href = sfu_project_2_link;
        project_2_element.textContent = sfu_project_2_text;
        project_2_element.classList.remove('hide');
        program_element.textContent = sfu_program_text;
        program_element.href = sfu_program_link;

        image_element.src = sfu_image_src;
    }
    else {
        heading_element.textContent = tue_heading_text;
        subheading_element.textContent = tue_subheading_text;
        title_element.textContent = tue_title_text;
        project_1_element.textContent = tue_project_1_text;
        project_2_element.classList.add('hide');
        project_1_element.href = tue_project_1_link;
        program_element.textContent = tue_program_text;
        program_element.href = tue_program_link;

        image_element.src = tue_image_src;
    }
}

clicked = false;
updateContent(true);
drawLine(isSFU_, true);
wrapper_element.classList.remove('hide');

// Draw the line initially
sfu_element.addEventListener('click', function(event) {
    // chat GPT: i have an <a> tag that i want its default behaviour (href) to get overritten by my js function. how can i do that without putting js into the DOM?
    event.preventDefault();
    isSFU_ = true;

    if(breakpoint2.matches) {
        updateContent(isSFU_);
        clicked = false;
        wrapper_element.classList.remove('hide');
        // https://www.w3schools.com/jsref/met_element_scrollintoview.asp
        heading_element.scrollIntoView(true);
        return;
    }
    else {
        if (heading_element.textContent == tue_heading_text && visible) {
            clicked = false;
            updateContent(isSFU_);
            drawLine(isSFU_, true);
            console.log("SWITCH TO SFU!");
        }
        else {
            clicked = !clicked;
            updateContent(isSFU_);
            drawLine(isSFU_, false);
            console.log("toggle sfu");
        }
    }
});

// Draw the line initially
tue_element.addEventListener('click', function(event) {
    // chat GPT: i have an <a> tag that i want its default behaviour (href) to get overritten by my js function. how can i do that without putting js into the DOM?
    event.preventDefault();
    isSFU_ = false;

    if(breakpoint2.matches) {
        updateContent(isSFU_);
        clicked = false;
        // https://www.w3schools.com/jsref/met_element_scrollintoview.asp
        wrapper_element.classList.remove('hide');
        heading_element.scrollIntoView(true);
        return;
    }
    else {
        if (heading_element.textContent == sfu_heading_text && visible) {
            clicked = false;
            updateContent(isSFU_);
            drawLine(isSFU_, true);
            console.log("SWITCH TO TUE!");
        }
        else {
            clicked = !clicked;
            updateContent(isSFU_);
            drawLine(isSFU_, false);
            console.log("toggle tue");
        }
    }
        
});

// Update the line when the window is resized or zoomed
window.addEventListener('resize', () => {
    drawLine(isSFU_, false)}
);

window.addEventListener('scroll', () => {
    drawLine(isSFU_, false)}
);






















// 'use-strict'

// var sfu_element = document.querySelector('#sfu');
// var tue_element = document.querySelector('#tue');

// var sfu_box = sfu_element.getBoundingClientRect();
// var tue_box = tue_element.getBoundingClientRect();
// var heading_box = document.querySelector('#about-details h3').getBoundingClientRect();

// sfu_element.addEventListener('click', () => {
//     var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');

//     for (const key in sfu_box) {
//         if (typeof sfu_box[key] !== "function") {
//           console.log(`${key} : ${sfu_box[key]}`);
//         }
//     }

//     line.setAttribute('id', 'line1');
//     line.setAttribute('x1', sfu_box.right);
//     line.setAttribute('y1', sfu_box.bottom);
//     line.setAttribute('x2', heading_box.left - 100);
//     line.setAttribute('y2', sfu_box.bottom);
//     line.setAttribute('x3', heading_box.left - 100);
//     line.setAttribute('y3', heading_box.bottom);
//     line.setAttribute('x4', heading_box.left);
//     line.setAttribute('y4', heading_box.bottom);

//     line.setAttribute('style', 'stroke: black; stroke-width: 2;');
    
//     document.querySelector('#line').append(line);
// });