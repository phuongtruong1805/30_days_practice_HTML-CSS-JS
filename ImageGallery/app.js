var images = document.querySelectorAll('.image img');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var close = document.querySelector('.close');
var gallery = document.querySelector('.gallery');
var galleryImg = document.querySelector('.gallery__inner img');

var currentIndex = 0;

images.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        galleryImg.src = images[currentIndex].src;
        gallery.classList.add('show');
    });
})

close.addEventListener('click', () => {
    gallery.classList.remove('show');
})

right.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    galleryImg.src = images[currentIndex].src;
})

left.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    galleryImg.src = images[currentIndex].src;
})

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
        gallery.classList.remove('show');
    }
    else if (e.keyCode === 37) {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        galleryImg.src = images[currentIndex].src;
    }
    else if (e.keyCode === 39) {
        currentIndex++;
        if (currentIndex > images.length - 1) {
            currentIndex = 0;
        }
        galleryImg.src = images[currentIndex].src;
    }
});