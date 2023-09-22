let accordeonTitles = document.querySelectorAll('.accordeon-title');
let accordeonContents = Array.from(document.querySelectorAll('.accordeon-content'));
let accordeonButtons = document.querySelectorAll('.accordeon-btn');





for (let i = 0; i < accordeonTitles.length; i++) {
    accordeonTitles[i].addEventListener('click', function () {
        accordeonContents.forEach(item => {item.style.maxHeight = "0"});
        accordeonTitles.forEach(item => {item.classList.remove('active')});
        accordeonButtons.forEach(item => {item.classList.remove('active')});
        if (accordeonContents[i].clientHeight == "0") {
            // i => i = accordeonContents[i];
            accordeonButtons[i].classList.toggle('active');
            accordeonContents[i].classList.toggle('visible');
            accordeonTitles[i].classList.toggle('active');
            accordeonContents[i].style.maxHeight = accordeonContents[i].scrollHeight + 'px';
        }
        else {
            accordeonButtons[i].classList.toggle('active');
            accordeonContents[i].style.maxHeight = "0";
            accordeonButtons.forEach(item => {item.classList.remove('active')});
        }
    })
}