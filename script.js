// Initialize IntersectionObserver for a specific class of elements
function observeElements(selector) {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.01 });

    elements.forEach(element => observer.observe(element));
}

// Trigger IntersectionObserver on DOMContentLoaded for multiple sections
document.addEventListener("DOMContentLoaded", function () {
    observeElements('.services-list div');
    observeElements('.reviews-list div');
    observeElements('.contact-left p');
    observeElements('.sub-title');
    observeElements('.view-more');
    observeElements('.social-icons a');
    observeElements('.contact-right img');
    observeElements('.copyright p');
    observeElements('.contact-right p');
    observeElements('.img-container .work img');
});

// Slider functionality
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slider img');
    const navButtons = document.querySelectorAll('.slider-nav a');

    // Set active class on the current navigation button
    function setActiveButton(index) {
        navButtons.forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
    }

    // Update active button when scrolling through slides
    const slider = document.querySelector('.slider');
    slider.addEventListener('scroll', () => {
        const scrollLeft = slider.scrollLeft;
        const slideWidth = slides[0].offsetWidth;
        const currentIndex = Math.round(scrollLeft / slideWidth);
        setActiveButton(currentIndex);
    });

    // Update active button when clicking a navigation button
    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            setActiveButton(index);
        });
    });

    // Set the first button as active by default
    setActiveButton(0);
});
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic.src;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}
const menuButton = document.getElementById("menuOpen");
const menu = document.getElementById("menu");
const closeMenuButton = document.getElementById("closeMenu");

function isMobile() {
    return window.innerWidth <= 768; // Define mobile width
}

function openMenu() {
    menuButton.style.display = 'none';
    menu.style.display = 'block';
}

function closeMenu() {
    if (isMobile()) {
        menuButton.style.display = 'block';
        menu.style.display = 'none';
    }
}

