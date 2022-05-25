var something = document.querySelectorAll('.card');
for(var i= 0;i < something.length;i++){
    something[i].addEventListener('click',function(){
        refresh();
        this.classList.add('expand');
    })
}
function refresh(){
    for(var i= 0;i < something.length;i++){
        something[i].classList.remove('expand');
    }
}