const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElement = document.querySelector('.menu__close');

hamburger.addEventListener('click', () =>{
    menu.classList.add('active');
});

closeElement.addEventListener('click', () =>{
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.progress__percent');
const lines = document.querySelectorAll('.progress__bar-line');

counters.forEach((item, i) =>{
    lines[i].style.width = item.innerHTML;
});