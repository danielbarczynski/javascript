console.log("hello world")

// rozgrzewka: 4 pola tekstowe w htmlu
// dopiac do tego js, przycisk przelicz (min max srednia i sume)

const calcButton = document.getElementById("calc");
const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");
const i3 = document.getElementById("i3");
const i4 = document.getElementById("i4");
const scores = document.getElementById("scores");


calcButton.addEventListener("click", function onClick() {
    let array = [i1.value, i2.value, i3.value, i4.value];
    let sum = i1.value + i2.value + i3.value + i4.value;
    const average = sum/4;
    const min = Math.min(array);
    const max = Math.max(array);
    scores.textContent = `${sum} ${average} ${min} ${max}`;
});