const input = document.querySelectorAll('input');
const inputContainer = document.querySelectorAll('.input-container');

const submit = document.querySelector('#submit')

const emailError = document.querySelector('#email-error')

submit.addEventListener('click', (event) => {
    input.forEach((element, index) => {
        if(element.value == ''){
            event.preventDefault();
            inputContainer[index].classList.add('error');
        } else{
            inputContainer[index].classList.remove('error');
            if(input[2].value.indexOf('@') == -1){
                inputContainer[2].classList.add('error');
                emailError.innerHTML = 'Looks like this is not an email';
            }
        }
    })
})