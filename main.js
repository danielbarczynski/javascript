'use strict';

let index = 1;
const img = document.querySelectorAll('img');
const dots = document.querySelectorAll('.bi-circle');

const slide = function(num) {  
    show(index += num);
}

const show = function(num) {
    if (num > img.length)
        index = 1;
    
    if (num < 1)
        index = img.length;
    
    for (let i = 0; i < img.length; i++) {
        dots[i].classList.replace('bi-circle-fill', 'bi-circle'); 
        img[i].style.display = 'none';  
    }
    
    dots[index - 1].classList.replace('bi-circle', 'bi-circle-fill');
    img[index - 1].style.display = 'block';
}

const showDot = function(num) {
    
    for (let i = 0; i < img.length; i++) {
        img[i].style.display = 'none';    
        dots[i].classList.replace('bi-circle-fill', 'bi-circle'); 
    }

    index = num + 1;
    dots[index - 1].classList.replace('bi-circle', 'bi-circle-fill');
    img[index - 1].style.display = 'block';
}

dots[0].classList.replace('bi-circle', 'bi-circle-fill');
setInterval(() => {  show(++index); }, 5000);
