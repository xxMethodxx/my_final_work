let openButton = document.querySelector('.profile__info__button');
let closeButton = document.querySelector('.form__close-btn');
let form = document.querySelector('.form');
let saveProfile = document.querySelector('.form__submit-button')

openButton.onclick = function () {
    console.log('Кнопка нажата!');
    form.classList.toggle('visible');
};
closeButton.onclick = function () {
    console.log('Кнопка нажата!');
    form.classList.toggle('visible');
};
saveProfile.onclick = function () {
    console.log('Кнопка нажата!');
    form.classList.toggle('visible');
}