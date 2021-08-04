var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var circles = document.querySelectorAll('.circle');
var progress = document.querySelector('.progress')
/*progress.style.width="100%";*/
var step = 1;
next.addEventListener('click',function (){
    if(step <4){
        step += 1;
    }
    check();
})
prev.addEventListener('click',function (){
    if(step>1){
        step -= 1;
    }
    removeClass();
    check();
})
function check(){
    if(step == 1){
        circles[0].classList.add('active');
        progress.style.width="0%";
    }else if(step == 2){
        circles[1].classList.add('active');
        progress.style.width="33%";
    }else if(step == 3){
        circles[2].classList.add('active');
        progress.style.width="66%";
    }else if(step == 4){
        circles[3].classList.add('active');
        progress.style.width="100%";
    }
}
function removeClass(){
    if(step == 3){
        circles[3].classList.remove('active');
    }else if(step == 2){
        circles[2].classList.remove('active');
    }else if(step == 1){
        circles[1].classList.remove('active');
    }
}