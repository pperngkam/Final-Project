// variables //
const left = document.querySelector('.left-arrow');
const right = document.querySelector('.right-arrow');
const picture = document.querySelector('.nav-bar');

const title = document.querySelector('#title');
const texts = document.querySelector('#text');

// Variables //
let counter = 1; 
const totalSlides = 3;

// EventListener //
left.addEventListener('click', () => {
    counter = (counter > 1) ? counter - 1 : totalSlides;
    updateBackground();
    updateText();
});

right.addEventListener('click', () => {
    counter = (counter < totalSlides) ? counter + 1 : 1;
    updateBackground();
    updateText();
});
// functions // DOM //
function updateBackground() {
    picture.style.backgroundImage = 'url(\'/images/desktop-image-hero-' + counter + '.jpg\')';
}

// functions //
function updateText() {
    if (counter === 1) {
        title.textContent = 'Discover innovative ways to decorate';
        texts.textContent = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    } else if (counter === 2) {
        title.textContent = 'We are available all across the globe'
        texts.textContent = "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    } else if (counter === 3) {
        title.textContent = 'Manufactured with the best materials'
        texts.textContent = "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
}
