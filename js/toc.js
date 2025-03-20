'use-strict'


const project_details_toggle = document.querySelector("#project_details_toggle");
const project_details_wrapper = document.querySelector("#project_details_wrapper");
const project_details_title = document.querySelector("#project_details_title");

project_details_toggle.addEventListener("click", function() {
    // Hide contents
    if(!project_details_wrapper.classList.contains("hide")) {
        project_details_toggle.innerHTML = "Show";
        project_details_wrapper.classList.add("hide");
        project_details_title.classList.add("no-margin");
        console.log("open");
    }
    // Open contents
    else {
        project_details_toggle.innerHTML = "Hide";
        project_details_wrapper.classList.remove("hide");
        project_details_title.classList.remove("no-margin");
        console.log("close");
    }
}); 

function updateTOCWidth() {
    // Get the h1 element
    const header = document.querySelector('#title');

    var headerWidthInPixels = header.offsetWidth;

    const headerParent = getComputedStyle(document.querySelector('.project-hero-title'));

    console.log('Header width in pixel 1:', headerWidthInPixels);

    headerWidthInPixels += parseFloat(headerParent.gap);

    console.log('Header width in pixel 3:', headerWidthInPixels);

    // Get the table of contents element
    const toc = document.querySelector('#table_of_contents');

    // Get the root font size in pixels (usually 16px)
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Convert the width to rem
    const headerWidthInRem = headerWidthInPixels / rootFontSize;

    // Apply the width as min-width in rem to the table of contents
    toc.style.minWidth = `${headerWidthInRem}rem`;

    console.log('Header width in REM:', headerWidthInRem);
}

function updateTOCHighlight() {
    console.log('hi');
    // Get all section elements and links in the table of contents
    const sections = document.querySelectorAll('.article-section');

    console.log('sections:', sections);

    const tocLinks = document.querySelectorAll('#table_of_contents a');

    console.log('links:', tocLinks);


    // Create an intersection observer to monitor when each section is in the viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const sectionTop = entry.boundingClientRect.top;
            const quarterScreen = window.innerHeight / 2;

            if (sectionTop <= quarterScreen) {
                tocLinks.forEach(link => link.classList.remove("active"));

                const activeLink = [...tocLinks].find(link => link.getAttribute("href").slice(1) === entry.target.id);
                console.log('intersection:', entry.target.id);
                console.log('active link:', tocLinks[0].getAttribute("href").slice(1));

                // If the section is in view, add 'active' class to the corresponding link
                if (activeLink) {
                    activeLink.classList.add('active');
                    return;
                }
            }
        });
    }, {
        threshold: 0.25,  // When 50% of the section is in view
    });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
}

function updateTOCTitle() {
    const toc = document.querySelector("#table_of_contents");
    const title = document.querySelector('#table_of_contents_title');
    const tagline = document.querySelector('#table_of_contents .tagline');


    // const stickyTop = parseInt(window.getComputedStyle(toc).top);
    const currentTop = toc.getBoundingClientRect().top;
    const isAtTop = currentTop / 16 <= 5; // TOC has reached the top of the viewport
    console.log("at top?", currentTop);

    title.classList.toggle("hide", !isAtTop);
    tagline.classList.toggle("hide", !isAtTop);
}

window.addEventListener('load', function () {
    // updateTOCWidth();
    // updateTOCTitle();
    if(!project_details_wrapper.classList.contains("hide")) {
        project_details_toggle.innerHTML = "Show";
        project_details_wrapper.classList.add("hide");
        project_details_title.classList.add("no-margin");
        console.log("open");
    }
});

window.addEventListener('resize', function () {
    // updateTOCWidth();
    // updateTOCTitle();
});

window.addEventListener('scroll', function () {
    // updateTOCTitle();

})

// updateTOCHighlight();

