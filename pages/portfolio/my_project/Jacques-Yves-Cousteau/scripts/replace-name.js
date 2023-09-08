let inputName = document.querySelector('.form__field-1');
let outputName = document.querySelector('.profile__info__name');
let inputProfession = document.querySelector('.form__field-2');
let outputProfession = document.querySelector('.profile__info__profession');

form.onsubmit = function (evt) {
    evt.preventDefault();
    outputProfession.textContent = inputProfession.value;
    outputName.textContent = inputName.value;
};