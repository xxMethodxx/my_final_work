let slider = document.querySelectorAll('.slider__line img');
let sliderLine = document.querySelector('.slider__line');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let text = document.querySelectorAll('.main__text div');
// console.log(text.length);
let paginations = document.querySelectorAll('.main__pagination div');
let i = 0;
// console.log(paginations.length);

paginations[i].style.backgroundColor = '#0ed80e';
slider[i].style.display = 'block';
text[i].style.display = 'block';

prevBtn.addEventListener('click', function () {
    // slider[i].style.display = 'none';
    paginations[i].style.backgroundColor = '#ffa50070';
    text[i].style.display = 'none';
    i--;
    if (i < 0) {
        i = slider.length - 1;
    }
    // slider[i].style.display = 'block';
    sliderLine.style.transform = `translateX(${-(i) * 500}px)`;
    paginations[i].style.backgroundColor = '#0ed80e';
    text[i].style.display = 'block';
});

nextBtn.addEventListener('click', function () {
    // slider[i].style.display = 'none';    
    paginations[i].style.backgroundColor = '#ffa50070';
    text[i].style.display = 'none';
    i++;
    if (i >= slider.length) {
        i = 0;
    }
    sliderLine.style.transform = `translateX(${-(i) * 500}px)`;
    console.log(i);
    // slider[i].style.display = 'block';
    paginations[i].style.backgroundColor = '#0ed80e';
    text[i].style.display = 'block';
});





// setInterval(() => {
//     nextSlide()
// }, 3000);


// prevBtn.onclick = function nextSlide () {
//     slider[i].style.display = 'none';
//     paginations[i].style.backgroundColor = '#ffa50070';
//     text[i].style.display = 'none';
//     i = i - 1;
//     if (i < 0) {
//         i = slider.length - 1;
//     }
//     slider[i].style.display = 'block';
//     paginations[i].style.backgroundColor = '#0ed80e';
//     text[i].style.display = 'block';
// }

// nextBtn.onclick = function () {
//     slider[i].style.display = 'none';
//     paginations[i].style.backgroundColor = '#ffa50070';
//     text[i].style.display = 'none';
//     i = i + 1;
//     if (i >= slider.length) {
//         i = 0;
//     }
//     slider[i].style.display = 'block';
//     paginations[i].style.backgroundColor = '#0ed80e';
//     text[i].style.display = 'block';
// }