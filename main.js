'use strict';

let index = 1;
const img = document.querySelectorAll('img');

const slide = function(num) {
    console.log('slide');
    show(index += num);
}

const show = function(num) {
    console.log('show');
    if (num > img.length)
        index = 1;
    
    if (num < 1)
        index = img.length;
    
    for (let i = 0; i < img.length; i++) {
        img[i].style.display = 'none';    
    }
    
    console.log(index - 1);
    img[index - 1].style.display = 'block';
}

const showDot = function(num) {
    for (let i = 0; i < img.length; i++) {
        img[i].style.display = 'none';    
    }

    index = num + 1;
    img[index - 1].style.display = 'block';
    console.log(index);
}

setInterval(() => {  show(++index); }, 3000);
