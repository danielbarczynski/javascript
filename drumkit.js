// // notatnik 
// document.addEventListener('keypress', onKeyPress)

// const KeyToSound = {
//     'a': 's1',
//     's': 's2',
// }
// function onKeyPress(ev) {
//     // const key = event.key
//     // logika mapowania key -> sound
//     const sound = KeyToSound[ev.key]
//     // switch (ev.key) {
//     //     case 'a':
//     //         sound = SOUND.clap
//     //         // clap
//     //         break;
//     //     case 's':
//     //         sound = SOUND.hihat
//     //         // hihat
//     //         break;
//     // }
//     playSound(sound)
// }

// function playSound(sound) {
//     if (!sound) {
//         return
//     }
//     const audioTag = document.querySelector(`#${clap}`)
//     audioTag.currentTime = 0
//     audioTag.play()
// }
// // Date.now()
'use strict';

let isClicked = false;

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
    
    if (isClicked === true)
    {
        audioArray.push(audio);
        durationArray.push(audio.duration);
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

function play() {
    audioArray.forEach(el => {
        setTimeout(el.play(), 1000);
    });
}

window.addEventListener('keypress', playSound);
recordButtons.addEventListener('click', record);
pauseButtons.addEventListener('click', pause);
playButtons.addEventListener('click', play);