const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const dropMenu = document.querySelector('.menu-container');
const gray = document.querySelector('.gray')

menu.addEventListener('click', () =>{
    dropMenu.classList.remove('hidden')
    gray.classList.remove('hidden');
})

closeMenu.addEventListener('click', () =>{
    dropMenu.classList.add('hidden')
    gray.classList.add('hidden');
})

gray.addEventListener('click', () => {
    dropMenu.classList.add('hidden')
    gray.classList.add('hidden');
})

const left = document.querySelector('.left-arrow');
const right = document.querySelector('.right-arrow');
const text = document.querySelector('.nav-bar');

let counter = 1;

left.addEventListener('click', () => {
    if (counter > 1) {
        counter--;
    } else {
        counter = 1;
    }
    text.style.backgroundImage = 'url(\'/images/desktop-image-hero-' + counter + '.jpg\')';
    nextDesc()
});

right.addEventListener('click', () => {
    if (counter < 3) {
        counter++;
    } else {
        counter = 3;
    }
    text.style.backgroundImage = 'url(\'/images/desktop-image-hero-' + counter + '.jpg\')';
    nextDesc()
});

const title = document.querySelector('#title');
const texts = document.querySelector('#text');

function nextDesc() {
    if (counter === 1) {
        title.textContent = 'Discover innovative ways to decorate';
        text.textContent = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    }else if (counter === 2) {
        title.textContent = 'We are available all across the globe'
        text.textContent = "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    }else if (counter === 3) {
        title.textContent = 'Manufactured with the best materials'
        text.textContent = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
}
