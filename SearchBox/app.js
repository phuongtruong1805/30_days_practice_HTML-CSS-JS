var btn = document.querySelector('.search-box__btn');
var input = document.querySelector('.search-box__input');
var searchBox = document.querySelector('.search-box');

btn.addEventListener('click', function() {
    searchBox.classList.toggle('search-box--active');
    input.focus();
})