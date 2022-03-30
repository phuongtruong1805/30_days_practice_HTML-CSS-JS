var eKey = document.querySelector('.key p:last-child')
console.log(eKey);
var eLocation = document.querySelector('.location p:last-child');
var eWhich = document.querySelector('.which p:last-child');
var eCode = document.querySelector('.code p:last-child');
var alert = document.querySelector('.alert');
var box = document.querySelector('.box');
var result = document.querySelector('.result');

document.addEventListener('keydown', e => {
    alert.classList.add('hide');
    box.classList.remove('hide');

    eKey.textContent = e.key;
    eLocation.textContent = e.location;
    eWhich.textContent = e.which;
    eCode.textContent = e.code;
    result.textContent = e.code;
});