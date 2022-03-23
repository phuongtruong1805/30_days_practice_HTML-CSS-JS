var btnOpen = document.querySelector('.open-modal-btn');
var btnClose = document.querySelector('.modal_close');
var modal = document.querySelector('.modal');

btnOpen.onclick = function() {
    modal.classList.toggle('hide');
}

btnClose.onclick = function() {
    modal.classList.toggle('hide');
}