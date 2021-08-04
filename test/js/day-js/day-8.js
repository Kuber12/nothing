/*Yaada Haru
Sochi rahan chu ma, ti dina haru,
*/
var labels = document.querySelectorAll('label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter,idx) =>`<span style="transition-delay:${idx*50}ms">${letter}</span>`)
        .join('')
});