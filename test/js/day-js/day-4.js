var button = document.querySelector('.search-button');
var input= document.querySelector('.search-input');
button.addEventListener('click',function(){
    input.classList.toggle('show');
})
var newInput = document.querySelector('.new-input');
var newSearch = document.querySelector('.new-search-button')
newSearch.addEventListener('click',function(){
    newInput.classList.toggle('hide');
})