let likeButton = document.querySelectorAll(".elements__like");
console.log(likeButton.length);

for (let i = 0; i < likeButton.length; i++) {
    likeButton[i].addEventListener('click', function () {
        console.log('Кнопка нажата'); 
        likeButton[i].classList.toggle('black');
    })
}
