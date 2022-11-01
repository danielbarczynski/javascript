// // notatnik z zajęć
// const main = document.querySelector('main')
// const timeoutRef = setTimeout( 
//     () => {
//         main.innerHTML='From setTimeout'
//     },
//     2000
// )
// let licznik = 0 
// const intervalRef = setInterval( 
//     () => {
//         main.innerHTML='From interval' + licznik++
//     },
//     4000
// )

// // kasujemy setInterval
// clearInterval(intervalRef)

// // kasujemy setTimeout
// clearTimeout(intervalRef)


// // window.requestAnimationFrame

'use strict';

let index = 1;
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const img = document.querySelectorAll('img');
const dots = document.querySelectorAll('.dot');

const slide = function (num) {
    console.log('slide');
    show(index += num);
}

const show = function (num) {
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

// show(index);
// left.addEventListener('click', slide);
// right.addEventListener('click', slide);
