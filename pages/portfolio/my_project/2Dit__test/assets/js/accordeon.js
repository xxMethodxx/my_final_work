let accordeonTitle = document.querySelectorAll ('.accordeon__title');
let accordeonText = document.querySelectorAll ('.accordeon__text');
let accordeon = document.querySelector ('.accordeon');
// console.log(accordeonTitle.length);
console.log(accordeonText.length);


// for (let i=0; i< accordeonTitle.length; i++) {
//     accordeonTitle[i].addEventListener ('click', function () {
//         console.log('click');
//         console.log(i);
//         accordeonText[i].classList.toggle ('active');
//         accordeon.classList.toggle ('active');
//     })
// }


accordeonTitle.forEach(item => item.addEventListener('click', () => {
            const activeContent = document.querySelector('#' + item.dataset.tab);
            console.log('#' + item.dataset.tab);
    
     if (activeContent.classList.contains('active')) {
                activeContent.classList.remove('active');
                item.classList.remove('active');
                activeContent.style.maxHeight = 0;
            } else {
                accordeonText.forEach(element => {
                    element.classList.remove('active');
                    element.style.maxHeight = 0;
                });
    
                accordeonTitle.forEach(element => element.classList.remove('active'));
    
                item.classList.add('active');
                activeContent.classList.add('active');
                activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
            }
        }))