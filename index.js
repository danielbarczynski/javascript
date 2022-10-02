console.log("hello world")

// rozgrzewka: 4 pola tekstowe w htmlu
// dopiac do tego js, przycisk przelicz (min max srednia i sume)

const calcButton = document.getElementsByClassName("calc");
const i1 = document.getElementsByClassName("i1");
const i2 = document.getElementsByClassName("i2");
const i3 = document.getElementsByClassName("i3");
const i4 = document.getElementsByClassName("i4");
const scores = document.getElementsByClassName("scores");

calcButton.addEventListener("click", function () {
    const sum = i1.value + i2.value + i3.value + i4.value;
    scores.textContent = sum;
});