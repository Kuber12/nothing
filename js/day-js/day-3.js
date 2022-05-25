var show = document.querySelector('.show');
var hide = document.querySelector('.hide');
var circle = document.querySelector('.circle');
var page = document.querySelector('main');
var slideNav = document.querySelector('.slide-nav');
show.addEventListener('click',function(){
    page.classList.add('rotated-main');
    circle.classList.add('rotate-circle');
    slideNav.classList.add('slided');
})
hide.addEventListener('click',function(){
    page.classList.remove('rotated-main');
    circle.classList.remove('rotate-circle');
    slideNav.classList.remove('slided');
})