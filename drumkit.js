'use strict';

let isClicked = false;
let i = 0;
let timeout = 0;
let start;
let end;
let time;

const audioArray = [];
const durationArray = [];

const audioArray2 = [];
const durationArray2 = [];

const audioArray3 = [];
const durationArray3 = [];

const audioArray4 = [];
const durationArray4 = [];

let currnetAudioArray = [];
let currnetDurationArray = [];

const recordButtons = document.querySelectorAll('button[data-active="record"]'); 
const pauseButtons = document.querySelectorAll('button[data-active="pause"]');
const playButtons = document.querySelectorAll('button[data-active="play"]');

function playSound(e) {
    end = new Date().getTime();
    time = end - start;
    
    if (isClicked === true)
        currnetDurationArray.push(time);

    const audio = document.querySelector(`audio[data-key="${e.key}"]`);

    if (!audio)
        return;

    audio.currentTime = 0;
    audio.play();
    start = new Date().getTime();

    if (isClicked === true) {
        currnetAudioArray.push(audio);
    }
}

function record() { //todo: param data-active num, then assign array to current
    
        currnetAudioArray = audioArray;
        currnetDurationArray = durationArray;
    

    isClicked = true; 
}

function pause() {
    isClicked = false;
}

function playRecord() {
    isClicked = false;

    audioArray.forEach(el => { 
        console.log(durationArray[i]);
        setTimeout(() => {
            el.play()
        }, durationArray[i++] * timeout++);
    })

    i = 0;
    timeout = 0;
}

window.addEventListener('keypress', playSound);

recordButtons.forEach(button => {
    button.addEventListener('click', record);
});

pauseButtons.forEach(button => {
    button.addEventListener('click', pause);
});

playButtons.forEach(button => {
    button.addEventListener('click', playRecord);
});