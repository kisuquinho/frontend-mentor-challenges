const btns = document.querySelectorAll('button')
const imgs = document.querySelector('.images')
const review = document.querySelectorAll('.review')

btns[0].addEventListener('click', firstItem)
btns[1].addEventListener('click', secondItem)

window.addEventListener('keydown', (e) => {
    if(e.key == 'ArrowRight') {
        secondItem();
    } else if(e.key == 'ArrowLeft') {
        firstItem();
    }
})

function firstItem() {
    imgs.style.transform = "translateX(0%)";
    review[0].classList.add('active');
    review[1].classList.remove('active');
}

function secondItem() {
    imgs.style.transform = "translateX(-50%)";
    review[1].classList.add('active');
    review[0].classList.remove('active');
}