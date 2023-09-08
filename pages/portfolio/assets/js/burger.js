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

// let p_p = document.querySelectorAll ('.main__item p');
// console.log(p_p.length);
// console.log (p_p);
// p_p[1].classList.add('third-p');