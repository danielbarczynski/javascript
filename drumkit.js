
'use strict';

let isClicked = false;
let i = 0;

const audioArray = [];
const durationArray = [];

const audioArray2 = [];
const durationArray2 = [];

const audioArray3 = [];
const durationArray3 = [];

const audioArray4 = [];
const durationArray4 = [];

const recordButtons = document.querySelector('.record');
const pauseButtons = document.querySelector('.pause');
const playButtons = document.querySelector('.play');

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);

    if (!audio)
        return;

    if (isClicked === true) {
        audioArray.push(audio);
        durationArray.push(audio.duration); //! czas utworu - czas odstepu od nastepnego dzwieku
    }

    audio.currentTime = 0;
    audio.play();
}

function record() {
    isClicked = true;
}

function pause() {
    isClicked = false;
}

function playRecord() {
    audioArray.forEach(el => {
        setTimeout(() => {
            el.play()
        }, durationArray[i++] * i++); //! opoznienie czasowe nie czas danego utworu
    })
}

window.addEventListener('keypress', playSound);
recordButtons.addEventListener('click', record);
pauseButtons.addEventListener('click', pause);
playButtons.addEventListener('click', playRecord);