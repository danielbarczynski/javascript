'use strict';

const calcButton = document.querySelector('#calc');
const i1 = document.querySelector('#i1');
const i2 = document.querySelector('#i2');
const i3 = document.querySelector('#i3');
const i4 = document.querySelector('#i4');
const scores = document.querySelector('#scores');

calcButton.addEventListener('click', function onClick() {
    let num1 = parseInt(i1.value) || 0;
    let num2 = parseInt(i2.value) || 0;
    let num3 = parseInt(i3.value) || 0;
    let num4 = parseInt(i4.value) || 0;
    
    let array = [num1, num2, num3, num4];
    const sum = array.reduce((a, b) => a + b, 0); 
    const average = array.reduce((a, b) => a + b, 0) / array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    scores.textContent = `${sum} ${average} ${min} ${max}`;
});
