var content = document.querySelector('.content');
var input = document.querySelector('.content input');
var tags = ['NodeJS', 'ReactJS'];
var removeAll = document.querySelector('.remove-all');

function reRender() {
    content.innerHTML = '';
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `<li>${tag} <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i></li>`
    }
    content.appendChild(input);
    input.focus();
}

reRender();

input.addEventListener('keydown', function (event) {
    if(event.key == 'Enter' && input.value != '') {
        tags.push(input.value.trim());
        input.value = '';
        reRender();
    }
});

function removeTag(index) {
    console.log(index);
    tags.splice(index, 1);
    reRender();
}

removeAll.addEventListener('click', function () {
    tags = [];
    reRender();
})

