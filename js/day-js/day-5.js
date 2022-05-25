let load = 0;
const bg = document.querySelector('.bg')
const loadingText = document.querySelector('.loading');

var inter = setInterval(bluring,30);
function bluring(){
    load++;
    if(load > 99){
        clearInterval(inter);
    }

    loadingText.textContent = load + '%';
    loadingText.style.opacity = scale(load,0,100,1,0);
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`;
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
