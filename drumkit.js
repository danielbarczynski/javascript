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

const audioArray = [];
const durationArray = [];

const audioArray2 = [];
const durationArray2 = [];

const audioArray3 = [];
const durationArray3 = [];

const audioArray4 = [];
const durationArray4 = [];

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);

    if (!audio) 
        return;
    audioArray.push(audio);
    durationArray.push(audio.duration);
    audio.currentTime = 0;
    audio.play();
}


window.addEventListener('keypress', playSound);