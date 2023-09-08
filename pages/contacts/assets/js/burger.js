let burger = document.querySelector('.burger');
let popup = document.querySelector('.burger__popup');
let hambMenu = document.querySelector('.menu-elem').cloneNode(1);
let body = document.body;

burger.onclick = function () {
    // console.log('click');
    popup.classList.toggle('open');
    burger.classList.toggle('active');
    body.classList.toggle('noscroll');
    popup.appendChild(hambMenu);
}