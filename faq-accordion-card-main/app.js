const faqQuestion = document.querySelectorAll(".question");
  
for (i of faqQuestion) {
 i.addEventListener("click", openCloseItem);
}
  
function openCloseItem() {
 this.classList.toggle('active');
 this.nextElementSibling.classList.toggle('active');
 let faqAnswer = this.nextElementSibling;
 console.log(faqAnswer);
 if (faqAnswer.style.maxHeight) {
    faqAnswer.style.maxHeight = null;
 } else {
    faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
 }
}