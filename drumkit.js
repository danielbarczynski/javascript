'use strict';

let isClicked = false;
let i = 0;
let timeout = 0;
let start;
let end;
let time;

const audioArray1 = [];
const durationArray1 = [];

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

function record() { 
    switch (this.id) { // chcialem dynamicznie przypisac currentArray = 'audioArray' + this.id ale bez powodzenia
        case '1':
            currnetAudioArray = audioArray1;
            currnetDurationArray = durationArray1;
            break;
        case '2':
            currnetAudioArray = audioArray2;
            currnetDurationArray = durationArray2;
            break;
        case '3':
            currnetAudioArray = audioArray3;
            currnetDurationArray = durationArray3;
            break;
        case '4':
            currnetAudioArray = audioArray4;
            currnetDurationArray = durationArray4;
            break;
        default:
            break;
    }

    isClicked = true;
}

function pause() {
    isClicked = false;
}

function playRecord() { 
    isClicked = false;
    switch (this.id) { //! make as a one function
        case '1':
            currnetAudioArray = audioArray1;
            currnetDurationArray = durationArray1;
            break;
        case '2':
            currnetAudioArray = audioArray2;
            currnetDurationArray = durationArray2;
            break;
        case '3':
            currnetAudioArray = audioArray3;
            currnetDurationArray = durationArray3;
            break;
        case '4':
            currnetAudioArray = audioArray4;
            currnetDurationArray = durationArray4;
            break;
        default:
            break;
    }
    currnetAudioArray.forEach(el => {
        console.log(currnetDurationArray[i]); //! audioArray(this.id)
        setTimeout(() => {
            el.play()
        }, currnetDurationArray[i++] * timeout++);
    })

    i = 0;
    timeout = 0;
}
//todo: pause recordplay or restart recordplay
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