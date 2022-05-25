const joke = document.querySelector('.joke');
const getButton = document.querySelector('.get-button');
getJoke();
getButton.addEventListener('click',getJoke);

function getJoke(){
fetch('https://icanhazdadjoke.com',{
    headers:{
        'Accept':'application/json'  
    }
})
  .then(response => response.json())
  .then(data => joke.innerHTML = data.joke);
}
