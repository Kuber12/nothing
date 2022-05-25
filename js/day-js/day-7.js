var rightOver = document.querySelector('.right');
var leftOver = document.querySelector('.left');
var container = document.querySelector('section')
rightOver.addEventListener('mouseenter',() =>{container.classList.add('hover-right')});
rightOver.addEventListener('mouseleave',() =>{container.classList.remove('hover-right')});
leftOver.addEventListener('mouseenter',() =>{container.classList.add('hover-left')});
leftOver.addEventListener('mouseleave',() =>{container.classList.remove('hover-left')});