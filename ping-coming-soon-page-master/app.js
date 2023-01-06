const form = document.getElementById('form')
const input = document.getElementById('input-field')
const error = document.getElementById('error')
const btn = document.getElementById('btn')

form.addEventListener('submit', (e) => {
    let messages = []
    if (input.value === '' || input.value == null){
        messages.push('Whoops! It looks like you forgot to add your email')
    }

    if (!(input.value === '' || input.value == null) && !(input.value.indexOf('@') > -1)) {
        messages.push('Please provide a valid email address')
    }

    if (messages.length > 0){
        e.preventDefault();
        btn.classList.add('error-btn')
        error.innerText = messages.join();
    }
})