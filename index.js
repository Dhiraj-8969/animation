let moon=document.getElementById('moon');
let left= document.getElementById('left');
let right= document.getElementById('right');
let herotext= document.querySelector('.hero p')

window.addEventListener('scroll',()=>{
    let scrollvalue=window.scrollY;
    moon.style.top =scrollvalue * 1 + "px";
    herotext.style.marginTop = scrollvalue * 1.7 + "px";
    left.style.left = scrollvalue *-1.2 + "px";
    right.style.left = scrollvalue *1.2 + "px";
})