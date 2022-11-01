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

const slide = function (num) {
    console.log('slide');
    show(index += num);
}

const show = function (num) {
    console.log('clicked');
    let i;

    if (num > img.length)
        index = 1;
    
    if (num < 1)
        index = img.length;

    for (let i = 0; i < img.length; i++) {
        img[i].style.display = 'none';    
    }

    img[index - 1].style.display = 'block';
}

// show(index);
// left.addEventListener('click', slide);
// right.addEventListener('click', slide);
