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
    observeElements('.img-container .work');
});

// Slider functionality
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slider img');
    const navButtons = document.querySelectorAll('.slider-nav a');
    const slider = document.querySelector('.slider');
    let currentIndex = 0; // Track the current slide index
    const slideWidth = slides[0].offsetWidth;
    const scrollInterval = 3000; // Time between slides in milliseconds

    // Set active class on the current navigation button
    function setActiveButton(index) {
        navButtons.forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
    }

    // Scroll to the next slide
    function scrollToNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide after the last one
        slider.scrollTo({
            left: currentIndex * slideWidth,
            behavior: 'smooth'
        });
        setActiveButton(currentIndex);
    }

    // Update active button when scrolling through slides
    slider.addEventListener('scroll', () => {
        const scrollLeft = slider.scrollLeft;
        const newIndex = Math.round(scrollLeft / slideWidth);
        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            setActiveButton(currentIndex);
        }
    });

    // Update active button and stop auto-scrolling when clicking a navigation button
    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentIndex = index; // Update currentIndex to clicked button's index
            slider.scrollTo({
                left: currentIndex * slideWidth,
                behavior: 'smooth'
            });
            setActiveButton(currentIndex);
        });
    });

    // Set the first button as active by default
    setActiveButton(0);

    // Start automatic scrolling
    setInterval(scrollToNextSlide, scrollInterval);
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

let imgList1 = document.getElementsByClassName('dream')[0];
let imgList2 = document.getElementsByClassName('dream')[1];
let imgList3 = document.getElementsByClassName('dream')[2];
let imgElement1 = document.createElement('div');
let imgElement2 = document.createElement('div');
let imgElement3 = document.createElement('div');
const viewButton = document.getElementsByClassName('view-more-btn')[0];
let isExpanded = false;
imgElement1.classList.add('work','visible');
imgElement2.classList.add('work','visible');
imgElement3.classList.add('work','visible');
imgElement1.innerHTML = '<img src="Sample/keqing.jpg" onclick="openFullImg(this)" class = "visible"> <img src="Sample/yone1.jpg" onclick="openFullImg(this)" class = "visible"> <img src="Sample/sawako1.jpg" onclick="openFullImg(this)" class = "visible"> <img src="Sample/tavy1.jpg" onclick="openFullImg(this)" class = "visible"> <img src="Sample/neon1.jpg" onclick="openFullImg(this)" class = "visible">';
imgElement2.innerHTML = '<img src="Sample/ahri.jpg" onclick="openFullImg(this)" class = "visible"> <img src="Sample/yone2.jpg" onclick="openFullImg(this)" class = "visible"> <img src="Sample/sawako2.jpg" onclick="openFullImg(this)" class = "visible"> <img src="Sample/tavy3.jpg" onclick="openFullImg(this)" class = "visible"> <img src="Sample/neon3.jpg" onclick="openFullImg(this)" class = "visible">';
imgElement3.innerHTML = '<img src="Sample/ruanmei.jpg" onclick="openFullImg(this)" class = "visible"> <img src="Sample/mailya.jpg" onclick="openFullImg(this)" class = "visible"> <img src="Sample/sawako3.jpg" onclick="openFullImg(this)" class = "visible"> <img src="Sample/tavy2.jpg" onclick="openFullImg(this)" class = "visible"> <img src="Sample/neon2.jpg" onclick="openFullImg(this)" class = "visible">';

function toggleView() {
    if (!isExpanded) {
        viewButton.innerText = "View less";
        imgList1.appendChild(imgElement1);
        imgList2.appendChild(imgElement2);
        imgList3.appendChild(imgElement3);
    } else {
        viewButton.innerText = "View more";
        imgList1.removeChild(imgElement1);
        imgList2.removeChild(imgElement2);
        imgList3.removeChild(imgElement3);
        document.getElementById('portfolio').scrollIntoView({
            behavior: 'smooth'
        });
    }
    isExpanded = !isExpanded;
}