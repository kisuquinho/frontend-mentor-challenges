const submit = document.querySelector('#submit');

submit.addEventListener('click', (event) => {
    ValidateEmail(submit.previousElementSibling);

    function ValidateEmail(input){
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (input.value.match(validRegex)) {
            submit.parentElement.classList.remove('error');
        } else {
            event.preventDefault();
            submit.parentElement.classList.add('error');
        }
    }   
})