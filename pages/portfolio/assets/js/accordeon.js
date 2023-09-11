let accordeonTitles = Array.from(document.querySelectorAll('.accordeon-title'));
let accordionContents = Array.from(document.querySelectorAll('.accordeon-content'));
let accordeonButtons = Array.from(document.querySelectorAll('.accordeon-btn'));
// console.log(accordeonBtn.length);
// console.log(accordeonButtons);
// console.log(accordionContents);




// for (let i = 0; i < accordeonTitles.length; i++) {
// accordeonTitles[i].addEventListener ('click', function () {
//     console.log(i);
//     i => i = accordionContents[i];
//     accordionContents[i].classList.toggle ('visible');    
//     accordionContents[i].style.maxHeight = accordionContents[i].scrollHeight + 'px';
// })
// };





for (let i = 0; i < accordeonTitles.length; i++) {
    accordeonTitles[i].addEventListener('click', function () {
        console.log(i);
        i => i = accordionContents[i];
        accordionContents[i].classList.toggle('visible');
        accordeonButtons[i].classList.toggle('active');
        accordionContents[i].style.maxHeight = accordionContents[i].scrollHeight + 'px';
    })
};





// accordeonTitles.forEach(item => item.addEventListener('click', () => {
//         const activeContent = document.querySelector('#' + item.dataset.tab);
//         console.log('#' + item.dataset.tab);

//  if (activeContent.classList.contains('visible')) {
//             activeContent.classList.remove('visible');
//             item.classList.remove('visible');
//             activeContent.style.maxHeight = 0;
//         } else {
//             accordionContents.forEach(element => {
//                 element.classList.remove('visible');
//                 element.style.maxHeight = 0;
//             });

//             accordeonTitles.forEach(element => element.classList.remove('visible'));

//             item.classList.add('visible');
//             activeContent.classList.add('visible');
//             activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
//         }
//     }))

// document.querySelector('[data-tab="tab-3"]').classList.add('active');
// document.querySelector('#tab-3').classList.add('active');
// document.querySelector('#tab-3').style.maxHeight = document.querySelector('#tab-3').scrollHeight + 'px';