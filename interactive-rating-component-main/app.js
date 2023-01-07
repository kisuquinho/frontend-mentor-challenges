const btn = document.querySelector('#submit')
const ratingCard = document.querySelector('#rating-state')
const tyCard = document.querySelector('#ty-state')
const ratings = document.querySelectorAll('.rating')
const starsSelected = document.querySelector('#stars-selected')
const errorMessage = document.querySelector('#error')

btn.addEventListener('click', () => {
    if(starsSelected.textContent == '') {
        errorMessage.innerHTML = "You must rate before submiting";
        errorMessage.style.display = "inline-block";
        let ratingCardHeight = ratingCard.offsetHeight;
        tyCard.style.height = ratingCardHeight + "px"; 
    }
    else{
        let ratingCardHeight = ratingCard.offsetHeight;
        tyCard.style.height = ratingCardHeight + "px";
        ratingCard.style.display = "none";
        tyCard.style.display = "flex";
    }
})

ratings.forEach((item, index) => {
    item.addEventListener('click', () =>
    starsSelected.innerHTML = "You selected " + (index + 1) + " out of 5")
})