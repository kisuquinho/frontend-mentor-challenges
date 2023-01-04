document.querySelector('.share-btn-container').addEventListener("click", showHideSocials);
document.querySelector('.share-active-btn-container').addEventListener("click", showHideSocials);

function showHideSocials() {
    document.querySelector('.share-active').classList.toggle('active');
}