const adviceId = document.querySelector('#advice_id')
const advice = document.querySelector('#advice')
const button = document.querySelector('#dice-btn')

axios.get('https://api.adviceslip.com/advice')
.then(function(response){
    const id = response.data.slip.id;
    adviceId.innerHTML = "advice " + "&num;" + id;

    let advices = response.data.slip.advice;
    advice.innerHTML = "&quot;" + advices + "&quot;";

    button.addEventListener('click', () => {
        refreshPage();
    })
})
.catch(function(error){
    console.log(error);
})

function refreshPage(){
    window.location.reload();
}